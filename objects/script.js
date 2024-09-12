let currentInput = '';
let previousInput = '';
let operator = null;

function appendNumber(number) {
  if (currentInput.includes('.') && number === '.') return; // Prevent multiple decimals
  currentInput = currentInput + number;
  updateDisplay();
}

function chooseOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') calculate();
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.innerText = currentInput || previousInput || '0';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay();
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }
  currentInput = result;
  operator = null;
  previousInput = '';
  updateDisplay();
}

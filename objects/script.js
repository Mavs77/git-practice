//global variables 
let currentInput = '';
let previousInput = '';
let operator = null;

function appendNumber(number) {
  if (currentInput.includes('.') && number === '.') return; // Prevent multiple decimals
  currentInput = currentInput + number;
  updateDisplay();
}

function chooseOperator(op) {
  if (currentInput === '') return; //prevents an operator from being chosen when no number has been entered 
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
  const prev = parseFloat(previousInput); //converts previousInput (a string) to a floating-point number (prev) using parseFloat
  const current = parseFloat(currentInput); //converts currentInput (a string) to a floating-point number (current) using parseFloat
  if (isNaN(prev) || isNaN(current)) return; //check if prev or current is NaN (not a number). If so, the function stops running to prevent an invalid calculation; 

  //switch statement that performs different arithmetic operations depending on the value of operator
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
  currentInput = result; //sets currentInput to the calculated result, so it displays on the calculator 
  operator = null;
  previousInput = '';
  updateDisplay();
}

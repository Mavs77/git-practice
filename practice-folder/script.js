// Prompt for the number of rounds
const totalRounds = parseInt(prompt("How many rounds of rock, paper, scissors do you want to play?:"));

// Initialize scores from localStorage or set to 0 if not present
let humanScore = localStorage.getItem('humanScore') ? parseInt(localStorage.getItem('humanScore')) : 0;
let computerScore = localStorage.getItem('computerScore') ? parseInt(localStorage.getItem('computerScore')) : 0;

// Display the initial scores
console.log(`Current score - computer: ${computerScore}, human: ${humanScore}`);

// Computer choice
function computerChoice() {
  const result = Math.random();
  if (result <= 1/3) {
    return 'rock';
  } else if (result > 1/3 && result <= 2/3) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// Human choice
function getHumanChoice() {
  let humanChoice = prompt("Please enter rock, paper, or scissors: ").toLowerCase();
  return humanChoice;
}

// Play a round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log('Tie!');
  } else if (
    (humanChoice === 'rock' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'rock')
  ) {
    console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
    computerScore++;
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log('Invalid entry');
  }
  // Display the updated scores
  console.log(`Score is - computer: ${computerScore}, human: ${humanScore}`);
}

// Loop through the number of rounds
for (let round = 1; round <= totalRounds; round++) {
  console.log(`Round ${round}`);
  const humanSelection = getHumanChoice();
  const computerSelection = computerChoice();
  playRound(humanSelection, computerSelection);
}

// Display the match result
if (humanScore > computerScore) {
  console.log(`You win the match! Final score - human: ${humanScore}, computer: ${computerScore}`);
} else if (computerScore > humanScore) {
  console.log(`You lose the match! Final score - computer: ${computerScore}, human: ${humanScore}`);
} else {
  console.log(`It's a tie! Final score - computer: ${computerScore}, human: ${humanScore}`);
}

// Reset scores and update the localStorage
humanScore = 0;
computerScore = 0;
localStorage.setItem('humanScore', humanScore.toString());
localStorage.setItem('computerScore', computerScore.toString());

// Provide final message after the match is over
console.log("Match over, all scores have been reset!");

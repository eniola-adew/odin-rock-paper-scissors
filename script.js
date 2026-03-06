let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = 'rock,paper,scissors';
  choices = choices.split(',');
  let index = Math.floor(Math.random() * 3);
  let choice = choices[index];
  return choice;
}

function getHumanChoice() {
  let userInput = prompt('Enter an option: rock, paper or scissors');
  return userInput;
}

function playGame() {
  function playRound() {
    let humanChoice = getHumanChoice();
    if (humanChoice === null) {
      return;
    }
    let computerChoice = getComputerChoice();
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a tie");
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  console.log(`Your score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
}

playGame();

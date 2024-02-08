// Functions
function getComputerChoice() {
  const selection = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);
  return selection[choice];
}

function playRound(playerSelection, computerSelection) {
  let result;
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "paper"
  ) {
    result = "You Lose! Paper beats Rock";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection == "scissor"
  ) {
    result = "You Lose! Scissor beats Paper";
  } else if (
    playerSelection.toLowerCase() === "scissor" &&
    computerSelection == "rock"
  ) {
    result = "You Lose! Rock beats scissor";
  } else if (playerSelection.toLowerCase() === computerSelection) {
    result = "Equal! Play again";
  } else {
    result = `You win! ${playerSelection} beats ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }`;
  }
  return result;
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    let choice = prompt("Choose your weapon!");
    let roundScore = playRound(choice, getComputerChoice());
    document.getElementById("score" + i).innerHTML = roundScore;
  }
}

playGame();

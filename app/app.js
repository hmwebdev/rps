// Watcher of the skies

document.getElementById("btnplayagain").addEventListener("click", playGame);

// Functions
function getComputerChoice() {
  const selection = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);
  return selection[choice];
}

function playRound(playerSelection, computerSelection) {
  let result;
  if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "rock"
  ) {
    result = "You Win! Paper beats Rock";
  } else if (
    playerSelection.toLowerCase() === "scissor" &&
    computerSelection == "paper"
  ) {
    result = "You Win! Scissor beats Paper";
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection == "scissor"
  ) {
    result = "You Win! Rock beats scissor";
  } else if (playerSelection.toLowerCase() === computerSelection) {
    result = "Equal!";
  } else {
    result = `You Lost! ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    } beats ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }`;
  }
  return result;
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    let choice = prompt("Choose your weapon!");
    if (choice === "rock" || choice === "paper" || choice === "scissor") {
      let roundScore = playRound(choice, getComputerChoice());
      document.getElementById("score" + i).innerHTML = roundScore;
    } else {
      alert("Please enter a valid value (rock, paper, scissor)");
      continue;
    }
  }
}

playGame();

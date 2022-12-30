function getComputerChoice() {
    const words = ["rock", "paper", "scissors"];
    let word = words[Math.floor(Math.random()*words.length)];
    return word;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let roundWinner = "";

    if (playerSelection === computerSelection) {
        roundWinner = "tie";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'scissors' && computerSelection === 'paper') ||
                (playerSelection === 'paper' && computerSelection === 'rock')) {
        roundWinner = "player";
    } else {
        roundWinner = "computer";
    }
    return getScoreMessage(roundWinner, playerSelection, computerSelection);
}

function getScoreMessage(roundWinner, playerSelection, computerSelection) {
    let message = "";
    if (roundWinner === "player") {
        message = `You win. ${playerSelection} beats ${computerSelection}.`;
    } else if (roundWinner === "computer") {
        message = `Computer wins. ${computerSelection} beats ${playerSelection}.`;
    } else {
        message = "You have a tie with computer.";
    }
    return message;
}
   
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

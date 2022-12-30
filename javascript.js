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
        playerScore += 1;
    } else {
        roundWinner = "computer";
        computerScore += 1;
    }
    console.log(getScoreMessage(roundWinner, playerSelection, computerSelection));
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

let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("please input your choice");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    if (playerScore > computerScore) {
        console.log("You win.");
    } else if (playerScore < computerScore) {
        console.log("Computer wins");
    } else {
        console.log("Tie.");
    }
}
   
const playerSelection = "rock";
const computerSelection = getComputerChoice();
game();


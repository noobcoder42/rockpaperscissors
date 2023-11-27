function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playerChoice() {
    let playerInput = prompt("Choose between rock, paper, or scissors");
    return playerInput.toLowerCase();
}

let player = playerChoice();
let computer = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "Player wins";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "Player wins";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Player wins";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "Computer wins";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "Computer wins";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "Computer wins";
    } else {
        return "It's a draw!";
    }
}

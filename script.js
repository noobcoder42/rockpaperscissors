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
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
            return "Player wins";
        } else if ((playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors")) {
            return "Computer wins";
        } else if (playerSelection === computerSelection) {
            return "It's a draw"; 
        } else {
            return "Please choose between rock, paper, or scissors"; 
        }
}




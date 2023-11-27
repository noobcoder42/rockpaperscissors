function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playerChoice() {
    let playerInput = prompt("Choose between rock, paper, or scissor");
    return playerInput.toLowerCase();
}

let player = playerChoice();
let computer = getComputerChoice();

console.log(computer);
console.log(player);
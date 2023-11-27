function getComputerChoice() {                                                      /* enables the computer to select a random element in the array */
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playerChoice() {
    let playerInput = prompt("Choose between rock, paper, or scissors");
    return playerInput.toLowerCase();                                               /* Ensures that the player input is converted to lowercase to avoid error in playRound function */ 
}

let player = playerChoice();
let computer = getComputerChoice();

function playRound(playerSelection, computerSelection) {                            /* This function is the main mechanic of the game */
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {              /* This part of the code decides whether the player input beats the random choice of the computer in the choices array in getComputerChoice function */
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

function game() {
    const totalRounds = 5;
    let playerScore = 0;
    let computerScore = 0; 

    for(let rounds = 1; rounds <= totalRounds; rounds++) {    /* This code loops through the game for 5 rounds */
        let player = playerChoice();
        let computer = getComputerChoice();
        let results = playRound(player, computer);

        if (results == "Player wins"){                        /* This part of the codes add scores to the variable playerScore & computerScore */
            playerScore++;                                       
        } else if (results == "Computer wins") {
            computerScore++;
        }

        console.log(`Round ${rounds}: Player chose ${player} | Computer chose ${computer}, ${results}`) /* Displays the current winner of the round using console.log */
    }

    console.log(`Final score, Player: ${playerScore} | Computer: ${computerScore}`) /* This part of the code displays the over score of the game and the winner */

    if (playerScore > computerScore){                        /* This part of the code tally up the score and compare it between playerScore & computerScore whover has the higher score wins the game */
        console.log("Player won the game!");
    } else if (playerScore < computerScore) {
        console.log("Computer won the game!");
    }
}

game();





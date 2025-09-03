// Javascript immplementation of Rock Paper Scissors game inside console

// Function to get computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to get player's choice
function getPlayerChoice() {
    const message = "Enter your choice (rock, paper, scissors):";
    let choice = prompt(message);
    while (!['rock', 'paper', 'scissors'].includes(choice.toLowerCase())) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:");
    }
    return choice.toLowerCase();
}



// function to determine the winner of a round
function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`It's a tie! Both chose ${playerSelection}.`);
        return 'tie';
    }
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        return 'player';
    }
    else {
        return 'computer';
    }
}

let humanScore = 0;
let computerScore = 0;


// function to play a single round
function playRound() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    let winner = determineWinner(playerSelection, computerSelection);

    if (winner === 'computer') {
        console.log(`Computer wins! ${computerSelection} beats ${playerSelection}.`);
        computerScore++;
    } else if (winner === 'tie') {
        console.log("It's a tie!");
    } else if (winner === 'player') {
        console.log(`You win this round! ${playerSelection} beats ${computerSelection}.`);
        humanScore++;
    }
}

// function to play the game for 5 rounds
function playGame() {
    let rounds = 5;
    for (let i = 0; i < rounds; i++) {
        playRound();
        console.log(`Score: You ${humanScore} - Computer ${computerScore}`);    
    }
    console.log(`Final Score: You ${humanScore} - Computer ${computerScore}`);

}

playGame();
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

const container = document.querySelector('.container');




// function to play a single round
function playRound(playerSelection) {
    //clear the winning message text if displayed currently
    if (winnerDiv.textContent) {
    winnerDiv.textContent = "";
    }

    // const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    let winner = determineWinner(playerSelection, computerSelection);

    if (winner === 'computer') {
        results.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
        score.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;
        
        if(computerScore == 5) {
            humanScore = 0;
            computerScore = 0;
            winnerDiv.textContent = "The computer won!";
            return;
        }
    } else if (winner === 'tie') {
        results.textContent = "It's a tie!";
    } else if (winner === 'player') {
        results.textContent = `You win this round! ${playerSelection} beats ${computerSelection}.`;
        humanScore++;
        score.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;
        if(humanScore == 5) {
            humanScore = 0;
            computerScore = 0;
            winnerDiv.textContent = "You're the winner!";
            return;
        }
    }
}

// function to play the game for 5 rounds
// function playGame() {
//     let rounds = 5;
//     for (let i = 0; i < rounds; i++) {
//         playRound();
//         console.log(`Score: You ${humanScore} - Computer ${computerScore}`);    
//     }
//     console.log(`Final Score: You ${humanScore} - Computer ${computerScore}`);

// }

// playGame();



const btnRock = document.createElement("button");
btnRock.classList.add("btnRock");
btnRock.textContent = "Rock";
btnRock.id = "btnRock";
container.appendChild(btnRock);

const btnPaper = document.createElement("button");
btnPaper.classList.add("btnPaper");
btnPaper.textContent = "Paper";
btnPaper.id = "btnPaper";
container.appendChild(btnPaper);

const btnScissors = document.createElement("button");
btnScissors.classList.add("btnScissors");
btnScissors.textContent = "Scissors";
btnScissors.id = "btnScissors";
container.appendChild(btnScissors);

const results = document.createElement("div");
results.classList.add("results");
container.appendChild(results);

const score = document.createElement("div");
score.classList.add("score");
container.appendChild(score);
score.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;

const winnerDiv = document.createElement("div");
winnerDiv.classList.add("winnerDiv");
container.appendChild(winnerDiv);

const buttonRow = document.createElement("div");
buttonRow.classList.add("button-row");
container.appendChild(buttonRow);

buttonRow.appendChild(btnRock);
buttonRow.appendChild(btnPaper);
buttonRow.appendChild(btnScissors);



const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        switch(event.target.id) {
            case 'btnRock':
                playRound('rock');
                break;
            case 'btnPaper':
                playRound('paper');
                break;
            case 'btnScissors':
                playRound('scissors');
                break;
        }
    });
});

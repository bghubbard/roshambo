let playerScore = 0
let computerScore = 0


function computerPlay() { //Selects a random choice out of function parameters a, b, c
    var arr = ['rock', 'paper', 'scissors']
    var random = arr[Math.floor(Math.random() * arr.length)]
    return random
};

function playRound(computerSelection, playerSelection){ //Compares user choice to the computer's random selection. Then updates the score variable depending on outcome.
    
    
    if (computerSelection === playerSelection)
    return `The result is a tie! You both chose ${playerSelection}.` // if computer and player select the same option, the result is a tie and neither score increments.
    
    else if (computerSelection === 'rock' && playerSelection === 'scissors' || 
        computerSelection === 'paper' && playerSelection === 'rock' || 
        computerSelection === 'scissors' && playerSelection === 'paper'){computerScore++
        return `You lose! ${computerSelection} beats ${playerSelection}.`} //if the computer wins, reteurns a string that says so and increments the computer score.
    
    else if (computerSelection === 'rock' && playerSelection === 'paper' || 
        computerSelection === 'scissors' && playerSelection === 'rock' || 
        computerSelection === 'paper' && playerSelection === 'scissors'){playerScore++
        return `You Win! ${playerSelection} beats ${computerSelection}.`} //if the player wins, returns a string that says so and increments the player score.
};

function updateScoreText() {
    if (playerScore < 5 && computerScore < 5)
    paraText.textContent =`Player Score: ${playerScore}, Computer Score: ${computerScore}.`;
    else if (playerScore == 5) {
        paraText.textContent = 'Congratulations, you\'ve won the game!';
        outcome.textContent = ' ';
    }
    else if (computerScore == 5) {
        paraText.textContent = 'Oh No! The computer won the game.';
        outcome.textContent = ' ';
    }
}

const rock = document.querySelector('.rock');
rock.addEventListener("click", function (event) {
    outcome.textContent = playRound(computerPlay(), 'rock');
    updateScoreText();
});
const paper = document.querySelector('.paper')
paper.addEventListener("click", function (event) {
    outcome.textContent = playRound(computerPlay(), 'paper');
    updateScoreText();
});
const scissors = document.querySelector('.scissors')
scissors.addEventListener("click", function (event) {
    outcome.textContent = playRound(computerPlay(), 'scissors');
    updateScoreText();
});

const score = document.querySelector('.p1');
const paraText = document.createTextNode(`Player Score: ${playerScore}, Computer Score: ${computerScore}.`);
score.appendChild(paraText)
const div = document.querySelector('.results')
const outcome = document.createTextNode('Click any button to begin.');
div.appendChild(outcome);
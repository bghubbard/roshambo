let playerScore = 0
let computerScore = 0


function computerPlay() { //Selects a random choice out of function parameters a, b, c
    var arr = ['rock', 'paper', 'scissors']
    var random = arr[Math.floor(Math.random() * arr.length)]
    return random
};

function playRound(computerSelection, playerSelection){ //Compares user choice to the computer's random selection. Then updates the score variable depending on outcome.
    
    
    if (computerSelection === playerSelection)
    return `The result is a tie! You both chose ${playerSelection}!` // if computer and player select the same option, the result is a tie and neither score increments.
    
    else if (computerSelection === 'rock' && playerSelection === 'scissors' || 
        computerSelection === 'paper' && playerSelection === 'rock' || 
        computerSelection === 'scissors' && playerSelection === 'paper'){computerScore++
        return `You lose! ${computerSelection} beats ${playerSelection}`} //if the computer wins, reteurns a string that says so and increments the computer score.
    
    else if (computerSelection === 'rock' && playerSelection === 'paper' || 
        computerSelection === 'scissors' && playerSelection === 'rock' || 
        computerSelection === 'paper' && playerSelection === 'scissors'){playerScore++
        return `You Win! ${playerSelection} beats ${computerSelection}`} //if the player wins, returns a string that says so and increments the player score.
};

const rock = document.querySelector('.rock');
rock.addEventListener("click", function (event) {
    playRound(computerPlay(), 'rock');
});
const paper = document.querySelector('.paper')
paper.addEventListener("click", function (event) {
    playRound(computerPlay(), 'paper');
});
const scissors = document.querySelector('.scissors')
scissors.addEventListener("click", function (event) {
    playRound(computerPlay(), 'scissors');
});
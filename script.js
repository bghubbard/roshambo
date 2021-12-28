let playerScore = 0
let computerScore = 0




function computerPlay() { //Selects a random choice out of function parameters a, b, c
    var arr = ['rock', 'paper', 'scissors']
    var random = arr[Math.floor(Math.random() * arr.length)]
    return random
}

function playerChoice(a){
    return String(a).toLowerCase()
}

function playRound(computerSelection, playerSelection){ //Prompts user for a choice and then compares it to the computer's random selection. Then updates the score variable depending on outcome.
    
    
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
}
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


function game(){// runs playRound 5 times then returns the computer and player scores, announces a winner or a tie game.
    console.log(`Computer score ${computerScore}, Player score ${playerScore}`)
    if (computerScore > playerScore){console.log('The computer wins!')}
    else if (playerScore > computerScore){console.log('You Win!')}
    else {console.log('The match ends in a tie!')}
}
game()

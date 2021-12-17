let playerScore = 0
let computerScore = 0




function computerPlay(a, b, c) { //Selects a random choice out of function parameters a, b, c
    var arr = [a, b, c]
    var random = arr[Math.floor(Math.random() * arr.length)]
    return random
}

function playRound(a, b){ //Prompts user for a choice and then compares it to the computer's random selection. Then updates the score variable depending on outcome.
    let computerSelection = computerPlay('rock', 'paper', 'scissors')
    let playerSelection = prompt('Enter rock, paper, or scissors').toLowerCase()
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





    // if ((computerSelection === 'rock') && (playerSelection === 'scissors')) {console.log('You Lose! Rock beats scissors.');return computerScore = (computerScore + 1)}
    // else if ((computerSelection === 'rock') && (playerSelection === 'rock')) {console.log('It\'s a tie! You both chose rock!')}
    // else if ((computerSelection === 'rock') && (playerSelection === 'paper')) {console.log('You Win! Paper beats rock!');return playerScore = (playerScore +1)}
    // else if ((computerSelection === 'scissors') && (playerSelection === 'paper')) {console.log('You Lose! Scissors beats paper!');return computerScore = (computerScore + 1)}
    // else if ((computerSelection === 'scissors') && (playerSelection === 'rock')) {console.log('You Win! Rock beats scissors!');return playerScore = (playerScore +1)}
    // else if ((computerSelection === 'scissors') && (playerSelection === 'scissors')) {console.log('It\'s a tie! You both chose scissors!')}
    // else if ((computerSelection === 'paper') && (playerSelection === 'rock')) {console.log('You Lose! Paper beats rock!');return computerScore = (computerScore + 1)}
    // else if ((computerSelection === 'paper') && (playerSelection === 'scissors')) {console.log('You Win! Scissors beats paper!');return playerScore = (playerScore +1)}
    // else if ((computerSelection === 'paper') && (playerSelection === 'paper')) {console.log('It\'s a tie! You both chose paper!')}
    // }



function game(){// runs playRound 5 times then returns the computer and player scores, announces a winner or a tie game.
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(`Computer score ${computerScore}, Player score ${playerScore}`)
    if (computerScore > playerScore){console.log('The computer wins!')}
    else if (playerScore > computerScore){console.log('You Win!')}
    else {console.log('The match ends in a tie!')}
}
game()

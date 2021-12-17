let playerScore = 0
let computerScore = 0




function computerPlay(a, b, c) { //Selects a random choice out of function parameters a, b, c
    var arr = [a, b, c]
    var random = arr[Math.floor(Math.random() * arr.length)]
    return random
}

function playRound(a, b){
    let computerSelection = computerPlay('rock', 'paper', 'scissors')
    let playerSelection = prompt('Enter rock, paper, or scissors')
    if ((computerSelection === 'rock') && (playerSelection === 'scissors')) {console.log('You Lose! Rock beats scissors.');return computerScore = (computerScore + 1)}
    else if ((computerSelection === 'rock') && (playerSelection === 'rock')) {console.log('It\'s a tie! You both chose rock!')}
    else if ((computerSelection === 'rock') && (playerSelection === 'paper')) {console.log('You Win! Paper beats rock!');return playerScore = (playerScore +1)}
    else if ((computerSelection === 'scissors') && (playerSelection === 'paper')) {console.log('You Lose! Scissors beats paper!');return computerScore = (computerScore + 1)}
    else if ((computerSelection === 'scissors') && (playerSelection === 'rock')) {console.log('You Win! Rock beats scissors!');return playerScore = (playerScore +1)}
    else if ((computerSelection === 'scissors') && (playerSelection === 'scissors')) {console.log('It\'s a tie! You both chose scissors!')}
    else if ((computerSelection === 'paper') && (playerSelection === 'rock')) {console.log('You Lose! Paper beats rock!');return computerScore = (computerScore + 1)}
    else if ((computerSelection === 'paper') && (playerSelection === 'scissors')) {console.log('You Win! Scissors beats paper!');return playerScore = (playerScore +1)}
    else if ((computerSelection === 'paper') && (playerSelection === 'paper')) {console.log('It\'s a tie! You both chose paper!')}
    }



function game(){
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    console.log(`Computer score ${computerScore}, Player score ${playerScore}`)
}
game()

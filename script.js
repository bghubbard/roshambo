
function computerPlay(a, b, c) { //Selects a random choice out of function parameters a, b, c
    var arr = [a, b, c]
    var random = arr[Math.floor(Math.random() * arr.length)]
    return random
}

function roShamBo(a, b) {
    let computerSelection = computerPlay('rock', 'paper', 'scissors')
    let playerSelection = prompt('Enter rock, paper, or scissors').toLowerCase()
        if ((computerSelection === 'rock') && (playerSelection === 'scissors')) {console.log('You Lose! Rock beats scissors.')}
        else if ((computerSelection === 'rock') && (playerSelection === 'rock')) {console.log('It\'s a tie! You both chose rock!')}
        else if ((computerSelection === 'rock') && (playerSelection === 'paper')) {console.log('You Win! Paper beats rock!')}
        else if ((computerSelection === 'scissors') && (playerSelection === 'paper')) {console.log('You Lose! Scissors beats paper!')}
        else if ((computerSelection === 'scissors') && (playerSelection === 'rock')) {console.log('You Win! Rock beats scissors!')}
        else if ((computerSelection === 'scissors') && (playerSelection === 'scissors')) {console.log('It\'s a tie! You both chose scissors!')}
        else if ((computerSelection === 'paper') && (playerSelection === 'rock')) {console.log('You Lose! Paper beats rock!')}
        else if ((computerSelection === 'paper') && (playerSelection === 'scissors')) {console.log('You Win! Scissors beats paper!')}
        else if ((computerSelection === 'paper') && (playerSelection === 'paper')) {console.log('It\'s a tie! You both chose paper!')}
}

roShamBo()
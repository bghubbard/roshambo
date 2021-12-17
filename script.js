
function computerPlay(a, b, c) {
    var arr = [a, b, c]
    var random = arr[Math.floor(Math.random() * arr.length)]
    return random
}



let computerSelection = computerPlay('rock', 'paper', 'scissors')
console.log(computerSelection)


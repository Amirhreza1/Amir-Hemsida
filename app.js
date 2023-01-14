const pcSelectore = document.getElementById('pc-selector')
const yourSelect = document.getElementById('your-select')
const resultOfIt = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let yourChoise
let pcChoise
let result 
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (event) => {
    yourChoise  = event.target.id
    yourSelect.innerHTML = yourChoise
    generatepcSelectore()
    getResult()
}))

function generatepcSelectore() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if(randomNumber === 1) {
        pcChoise = "rock"
    }
    if(randomNumber === 2) {
        pcChoise = "paper"
    }    
    if(randomNumber === 3) {
        pcChoise = "scissors"
    }
    pcSelectore.innerHTML = pcChoise

}

function getResult() {
    if(pcChoise === yourChoise){
        result = "Ingen vann eller förlora!"
    }
    if(pcChoise === "rock" && yourChoise === "scissors") {
        result = "Du har förlorat!"
    }
    if(pcChoise === "rock" && yourChoise === "paper") {
        result = "Du har vunnit!"
    }
    if(pcChoise === "paper" && yourChoise === "scissors") {
        result = "Du har vunnit!"
    }
    if(pcChoise === "paper" && yourChoise === "rock"){
        result = "Du har förlorat!"
    }
    if(pcChoise === "scissors" && yourChoise === "rock") {
        result = "Du har vunnit!"
    }
    if(pcChoise === "scissors" && yourChoise === "paper") {
        result = "Du har förlorat!"
    }
    resultOfIt.innerHTML = result
}


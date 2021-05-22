let guessBox = document.getElementById("number-input");
let check = document.getElementById("guess");
let history = document.getElementById("history");
const randomNumber = Math.floor(Math.random()*100+1);
console.log(randomNumber)
let count = 1;
let finalResult = false;
history.innerHTML = "";

function GuessingGame() {
    if (finalResult === false) {
        computeWinner();
        viewHistory();
        return finalResult;
    }
}   

function viewHistory() {
    let manualGuess = guessBox.value;
    history.innerHTML +=  "You😇Guessed " + manualGuess;

}

function computeWinner() {
    let result = document.getElementById("result");

    if (count < 5) {
        let guess = guessBox.value;
        if (randomNumber == guess) {
            result.innerHTML = "<h1>You Won!</h1>";
            finalResult = true;
        } else if (randomNumber < guess) {
            result.innerHTML = "<h1>You🤔guessed Too⬆️High!</h1>";
            finalResult = false;
        } else {
            result.innerHTML = "<h1>You🤔guessed Too⬇️Low!</h1>";
            finalResult = false;
        }
        count ++;
    } else if (count == 5) {
        if (randomNumber == guess) {
            result.innerHTML = "<h1>Wow🥳You Won😍!</h1>";
            finalResult = true;
        } else {
            result.innerHTML = "<h1>Opps🥺You Lose👎!</h1>";
            finalResult = true;
        }
    }
}



check.addEventListener("click", GuessingGame);
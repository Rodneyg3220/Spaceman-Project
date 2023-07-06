const wordBank = ['ATLANTA HAWKS', 'BOSTON CELTICS', 'BROOKLYN NETS', 'CHARLOTTE HORNETS', 'CHICAGO BULLS', 'CLEVELAND CAVALIERS', 'DALLAS MAVERICKS', 'DENVER NUGGETS', 
'DETROIT PISTONS', 'GOLDEN STATE WARRIORS', 'HOUSTON ROCKETS', 'INDIANA PACERS', 'LOS ANGELES CLIPPERS', 'LOS ANGELES LAKERS', 'MEMPHIS GRIZZLIES', 'MIAMI HEAT',
'MILWAUKEE BUCKS', 'MINNESOTA TIMBERWOLVES', 'NEW ORLEANS PELICANS', 'NEW YORK KNICKS','OKLAHOMA CITY THUNDER','ORLANDO MAGIC','PHOENIX SUNS',
'PORTLAND TRAIL BLAZERS', 'SACRAMENTO KINGS', 'SAN ANTONIO SPURS', 'TORONTO RAPTORS', 'UTAH JAZZ','WASHINGTON WIZARDS'
];
//Const Variables
const word = wordBank[Math.floor(Math.random() * wordBank.length)];
const startGame = document.querySelector("#start-game");
const messageBoard = document.querySelector("#message-board");
const clearGame = document.querySelector("#clear-game");
const quitGame = document.querySelector("#quit-game");
const lettersButton = document.querySelectorAll("#letters > button");
const wordSpaces = document.querySelector("#spaceman");
const winLogic = document.querySelector(".win");
const lossCounter = document.querySelector("#counter");
incorrectGuesses = [];

//Button to start game
startGame.addEventListener("click", newRandomWord);
//Button to clear game board
quitGame.addEventListener("click", newRandomWord,);
//letters button responding to clicks
document.querySelector("#letters").addEventListener("click", handleClick);

// Assigned randomWord variable
let randomWord = null;
// Users word to guess
let guessTeam;
// represent the empty string.
let correctTeam;
// counter for incorrect letter choices
let counter = 0;

//Function used to generate new word at random.
function newRandomWord() {
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log("thisIsTheRandomWord =>", randomWord);
    guessTeam = "";

//Creating the input spaces for the letters
for (let char of randomWord) {
    console.log(char);
    if (char === " ") {
        guessTeam = guessTeam + char;
    } else {
        guessTeam = guessTeam + "_";
    }
}
renderGuessTeam();
}

//display the guess word 
function renderGuessTeam() {
wordSpaces.textContent = guessTeam;
lossCounter.innerHTML = counter;
}

//display users letter guess
function handleClick(e) {
    let letter = e.target.textContent;
    if (randomWord.includes(letter)) {
        let correctTeam = "";
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord.charAt(i) === letter) {
                correctTeam += letter;

            } else {
                correctTeam += guessTeam.charAt(i);
                incorrectGuesses.push(guessTeam);
            }
        }
        guessTeam = correctTeam;
    } else {
        counter++;
    }
    renderGuessTeam();
    winner();
}

function winner() {
    // Logic for determining if user wins or lose.
    if (guessTeam === randomWord) {
        winLogic.innerHTML = ("You Win!!!");
        document.querySelector("#letters").removeEventListener("click", handleClick);
    } else if (counter === 5) {
        winLogic.innerHTML = ("You Lose :(");
        document.querySelector("#letters").removeEventListener("click", handleClick);
    }
}

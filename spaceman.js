const wordBank = ['Atlanta Hawks', 'Boston Celtics', 'Brooklyn Nets', 'Charlotte Hornets', 'Chicago Bulls', 'Cleveland Cavaliers', 'Dallas Mavericks', 'Denver Nuggets', 
'Detroit Pistons', 'Golden State Warriors', 'Houston Rockets', 'Indiana Pacers', 'Los Angeles Clippers', 'Los Angeles Lakers', 'Memphis Grizzlies', 'Miami Heat',
'Milwaukee Bucks', 'Minnesota Timberwolves', 'New Orleans Pelicans', 'New York Knicks','Oklahoma City Thunder','Orlando Magic','Philadelphia 76ers','Phoenix Suns',
'Portland Trail Blazers', 'Sacramento Kings', 'San Antonio Spurs', 'Toronto Raptors', 'Utah Jazz','Washington Wizards'];
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

//Function used to generate new word a random.
function newRandomWord() {
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log("thisIsTheRandomWord =>", randomWord);
    guessWord = "";
}
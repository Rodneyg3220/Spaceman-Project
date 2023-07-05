const wordBank = ['Atlanta Hawks', 'Boston Celtics', 'Brooklyn Nets', 'Charlotte Hornets', 'Chicago Bulls', 'Cleveland Cavaliers', 'Dallas Mavericks', 'Denver Nuggets', 
'Detroit Pistons', 'Golden State Warriors', 'Houston Rockets', 'Indiana Pacers', 'Los Angeles Clippers', 'Los Angeles Lakers', 'Memphis Grizzlies', 'Miami Heat',
'Milwaukee Bucks', 'Minnesota Timberwolves', 'New Orleans Pelicans', 'New York Knicks','Oklahoma City Thunder','Orlando Magic','Philadelphia 76ers','Phoenix Suns',
'Portland Trail Blazers', 'Sacramento Kings', 'San Antonio Spurs', 'Toronto Raptors', 'Utah Jazz','Washington Wizards'];
const startButton = document.querySelector('Start-Game');
console.log('startButton');
const resetButton = document.querySelector('Reset-Game')
const wordChoice = wordBank[Math.floor(Math.random()*wordBank.length)];
const messageBoard = document.querySelector('#message-board');
const lettersButton = document.querySelectorAll('#letters > button');

//Assign random word
let wordAtRandom = null
//Team the user has to guess
let guessTeam;
//Represents an empty string
let correctTeam

startButton.addEventListener('click', wordAtRandom);

const comp_choice = ['Rock', 'Paper', 'Scissors'];
const computerSelection = getComputerChoice();
let win = 0;
let playerscore = 0;
let compscore = 0;


let choice = document.querySelectorAll('.button');
const winner = document.querySelector('.winner');
const reset = document.querySelector('.popup');

reset.addEventListener('click', () => {
    resetScreen();
    restartGame();
    document.querySelector('.popup').style.display = 'none';
});

choice.forEach((button) => {
    button.addEventListener('click', () => {
        const image = button.querySelector('img');
        playerSelection = image.alt;
        game(playerSelection);
    })
})

const player = document.querySelector('#player-score');
player.textContent = `Player Score: ${playerscore}`;
const computer = document.querySelector('#comp-score');
computer.textContent = `Computer Score: ${compscore}`;

function getComputerChoice() {
    let random_number = Math.floor(Math.random() * 3);
    return comp_choice[random_number];
}

function playRound(playerSelection) {
    let person = playerSelection.toLowerCase();
    let comp = getComputerChoice().toLowerCase();
    if (person == 'rock') {
        if (comp == 'scissors') {
            return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
        }
        else if (comp == 'paper') {
            return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
        }
        else {
            return 'You Tie!';
        }
    }
    if (person == 'paper') {
        if (comp == 'rock') {
            return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
        }
        else if (comp == 'scissors') {
            return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
        }
        else {
            return 'You Tie!';
        }
    }
    if (person == 'scissors') {
        if (comp == 'paper') {
            return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
        }
        else if (comp == 'rock') {
            return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
        }
        else {
            return 'You Tie!';
        }
    }
}

function game(playerSelection) {
    let result = playRound(playerSelection);
    console.log(result);
    if (result.includes('Win')) {
         playerscore++;
    }
    else {
        compscore++;
    }
    updatescore();
    if(playerscore == 5) {
        playerWon();
        document.querySelector('.popup').style.display = 'flex';
    }
    else if(compscore == 5) {
        computerWon();
        document.querySelector('.popup').style.display = 'flex';
    }
    
}

function updatescore() {
    player.textContent = `Player Score: ${playerscore}`;
    computer.textContent = `Computer Score: ${compscore}`;
}

function playerWon() {
    winner.textContent = 'PLAYER HAS WON';
}

function restartGame() {
    playerscore = 0;
    compscore = 0;
}

function computerWon() {
    winner.textContent = 'COMPUTER HAS WON';
    console.log('hi');
}

function resetScreen() {
    winner.textContent = '';
}
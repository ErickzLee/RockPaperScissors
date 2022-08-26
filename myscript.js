const comp_choice = ['Rock', 'Paper', 'Scissors'];
const computerSelection = getComputerChoice();
let win = 0;
let playerscore = 0;
let compscore = 0;

const rock = document.querySelector('#rock');
console.log(rock);
rock.addEventListener('click', () => {
    game('rock');
});

const paper = document.querySelector('#paper');
console.log(paper);
paper.addEventListener('click', () => {
    game('paper');
});

const scissors = document.querySelector('#scissors');
console.log(scissors);
scissors.addEventListener('click', () => {
    game('scissors');
});

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
        alert('Player has won!');
    }
    else if(compscore == 5) {
        alert('Computer has won!');
    }
    
}

function updatescore() {
    player.textContent = `Player Score: ${playerscore}`;
    computer.textContent = `Computer Score: ${compscore}`;
}
/*game();*/
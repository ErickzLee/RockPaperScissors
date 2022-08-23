const comp_choice = ['Rock', 'Paper', 'Scissors'];
const computerSelection = getComputerChoice();
let win = 0;
function getComputerChoice() {
    let random_number = Math.floor(Math.random() * 3);
    return comp_choice[random_number];
}

function playRound(playerSelection, computerSelection) {
    let person = playerSelection.toLowerCase();
    let comp = computerSelection.toLowerCase();
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

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose Rock, Paper, or Scissors');
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes('Win')) {
            win++;
        }
    }
    console.log(win);
}
game();

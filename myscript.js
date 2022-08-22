const comp_choice = ['Rock', 'Paper', 'Scissors'];
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
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
}

console.log(playRound(playerSelection, computerSelection));

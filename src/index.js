//Game is Rock, Paper, Scissors
//Player/user will be playing against computer
//How to win: Paper beats Rock, Rock beats Scissors, and Scissors beats Paper

//have computer randomly select either Rock, Paper, or Scissors
function computerPlay() {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    if (compChoice === 1) {
        return "rock"
    } else if (compChoice === 2) {
        return "paper"
    } else {
        return "scissors"
    }
};

let computerSelection = computerPlay();
console.log(computerSelection);

//compare computer choice to player choice and return appropriate response
function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return "It's a tie! Try again!"
    } else if ((computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper")) {
        return `You lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`
    } else if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper")) {
        return `Congrats! You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`
    } else {
        return "Sorry, that is not an option. Please enter rock, paper, or scissors."
    }
};


function game() {
    for (let i = 1; i <= 5; i++) {
        //get playerSelection
        let playerSelection = prompt(`Round ${i} / 5\nPlease enter rock, paper, or scissors:`).toLowerCase();

        alert(playRound(computerSelection, playerSelection));
        console.log(playRound(computerSelection, playerSelection));

        computerSelection = computerPlay();
        console.log(computerSelection);

        if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
            i--;
        }
    }
}

let playGame = document.querySelector(".playGame");
playGame.addEventListener('click', game);
//Game is Rock, Paper, Scissors
//Player/user will be playing against computer
//How to win: Paper beats Rock, Rock beats Scissors, and Scissors beats Paper

//have computer randomly select either Rock, Paper, or Scissors
function computerPlay() {
    let compChoice = Math.round(Math.random() * 3);
    if (compChoice === 1) {
        return "rock"
    } else if (compChoice === 2) {
        return "paper"
    } else {
        return "scissors"
    }
};

let computerSelection = computerPlay();

let playerWin = 0;
let compWin = 0;

const doc = document.querySelector('body');
const round = document.createElement('h2');
round.classList.add('round');
const score = document.createElement('div');
score.classList.add('score');
const results = document.createElement('p');
results.classList.add('results');
const container = document.querySelector('.container');

function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        score.innerHTML = `<p><strong>Player</strong>: ${playerWin}</p>
        <p><strong>Computer</strong>: ${compWin}</p>`;
        doc.appendChild(score);

        results.textContent = `It's a tie! We both chose ${computerSelection}. Try again!`;
        doc.appendChild(results);
    } else if ((computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper")) {
        compWin++;

        score.innerHTML = `<p><strong>Player</strong>: ${playerWin}</p>
        <p><strong>Computer</strong>: ${compWin}</p>`;
        doc.appendChild(score);

        results.textContent = `You lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`;
        doc.appendChild(results);
    } else if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper")) {
        playerWin++;

        score.innerHTML = `<p><strong>Player</strong>: ${playerWin}</p>
        <p><strong>Computer</strong>: ${compWin}</p>`;
        doc.appendChild(score);

        results.textContent = `Congrats! You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`;
        doc.appendChild(results);
    } else {
        score.innerHTML = `<p><strong>Player</strong>: ${playerWin}</p>
        <p><strong>Computer</strong>: ${compWin}</p>`;
        doc.appendChild(score);

        alert("Sorry, that is not an option. Please enter rock, paper, or scissors.");
    }
};

let playerSelection = "";
const btns = document.querySelectorAll('button');

//function listens for button clicks and will run game 5 times
function game() {
    let i = 0;
    playerWin = 0;
    compWin = 0;
    console.log(computerSelection);
    btns.forEach(btn => btn.addEventListener('click', function() {
        while (i < 5) {
            playerSelection = btn.classList.value;

            if (playerSelection != computerSelection) {
                i++;
            };

            round.textContent = `Round ${i} / 5`;
            doc.appendChild(round);

            playRound(computerSelection, playerSelection);

            computerSelection = computerPlay();

            break
        };
        if(i >= 5) {
            round.innerHTML = `Round ${i} / 5<br>Play again?`;

            btns.forEach(btn => btn.disabled = true);

            let playAgain = document.createElement('button');
            playAgain.classList.add('playAgain');
            playAgain.setAttribute('style','background-color: #E88AB9; border-radius: 15px; margin: 15px; padding: 15px; display: flex; align-items: center; box-shadow: 0px 4px 8px #e88ab9, 0px -4px 8px #e88ab9, 4px 0px 8px #e88ab9, -4px 0px 8px #e88ab9;')
            playAgain.textContent = `Let's play again!`;
            container.appendChild(playAgain);

            let playAgainBtn = document.querySelector('.playAgain');
            playAgainBtn.addEventListener('click', function() {
                window.location.reload();
            });
        };
    }));
};

//calls game function
game();
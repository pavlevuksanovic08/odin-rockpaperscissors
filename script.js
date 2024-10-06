let humanScore = 0;
let computerScore = 0;
let gameEnded = false;
let resultPlaceHolder = document.querySelector(".result");

function getComputerChoice() {
    random = Math.random();
    if (random < 0.33) {
        return "rock";
    } else if (random > 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    input = prompt("Your choice(rock, paper, scissors): ");
    if (input == "rock" || input == "paper" || input == "scissors") {
        return input;
    } else {
        return "wrong input";
    }
}

function playRound(humanChoice, computerChoice) {
     
    if (humanChoice == "rock" && computerChoice == "scissors") {
        resultPlaceHolder.textContent = "You Won! Rock beats scissors.";
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        resultPlaceHolder.textContent = "You Lost! Rock beats scissors.";
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        resultPlaceHolder.textContent = "You Won! Paper beats rock.";
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        resultPlaceHolder.textContent = "You Lost! Paper beats rock.";
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        resultPlaceHolder.textContent = "You Won! Scissors beats paper.";
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        resultPlaceHolder.textContent = "You Lost! Scissors beats paper.";
        computerScore++;
    } else {
        resultPlaceHolder.textContent = "Tie!";
    } 
}

function playGame() {
    let selection = document.querySelectorAll("button");

    selection.forEach((button) => {
        button.addEventListener("click", () => {
            if (gameEnded) return; // Check if the game has ended

            let humanChoice = button.textContent.toLowerCase();
            playRound(humanChoice, getComputerChoice());

            // Check for game end conditions
            if (humanScore === 5) {
                resultPlaceHolder.textContent = `YOU WON ${humanScore}-${computerScore}! Congrats!`;
                gameEnded = true; // Set gameEnded to true
            } else if (computerScore === 5) {
                resultPlaceHolder.textContent = `COMPUTER WON ${computerScore}-${humanScore}!`;
                gameEnded = true; // Set gameEnded to true
            }
        });
    });
}

playGame();
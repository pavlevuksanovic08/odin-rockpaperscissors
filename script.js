let humanScore = 0;
let computerScore = 0;


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
        console.log("You Won! Rock beats scissors.");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You Lost! Rock beats scissors.");
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You Won! Paper beats rock.");
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You Lost! Paper beats rock.");
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You Won! Scissors beats paper.");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You Lost! Scissors beats paper.");
        computerScore++;
    } else {
        console.log("Tie!")
    } 
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    
    if (humanScore > computerScore) {
        console.log(`YOU WON ${humanScore}-${computerScore}! Congrats!`);
    } else if (humanScore < computerScore) {
        console.log(`COMPUTER WON ${computerScore}-${humanScore}!`);
    } else {
        console.log(`IT'S A TIE ${humanScore}-${computerScore}!`);
    }
}

playGame();
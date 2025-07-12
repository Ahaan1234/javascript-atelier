// console.log("Hello World!");

const button = document.querySelector(".get-input");
let humanScore = 0;
let computerScore = 0;

playGame();

function playGame() {
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore){
        alert("You Win! Congrats lol");
    } else if(humanScore > computerScore){
        alert("You Lose! Get good noob");
    } else {
        alert("Draw!");
    }
};

function playRound(humanChoice, computerChoice) {
    let hc = humanChoice.toLowerCase();
    let cc = computerChoice.toLowerCase();
    if ((hc === "rock" && cc === "paper") || (hc === "paper" && cc === "scissors") || (hc === "scissors" && cc === "rock")) {
        computerScore = computerScore + 1;
        alert(`You Lose! ${computerChoice} beats ${humanChoice}!`);
    }
    else if ((hc === "rock" && cc === "paper") || (hc === "paper" && cc === "scissors") || (hc === "scissors" && cc === "rock")) {
        humanScore = humanScore + 1;
        alert(`You Win! ${humanChoice} beats ${computerChoice}!`);
    }
    else {
        alert(`Draw!`);
    }
};

function getComputerChoice() {
    let x = Math.random();
    if (x < 0.33) {
        return "Rock";
    }
    else if (x < 0.67) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
};

function getHumanChoice() {
    let input = window.prompt("Rock, Paper, Scissors?");
    return input;
};

button.addEventListener("click", () => {
    let input = getHumanChoice();
    alert(input);
    alert(getComputerChoice());
});
// console.log(getHumanChoice());
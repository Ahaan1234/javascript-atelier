// console.log("Hello World!");

const button = document.querySelector(".get-input");
let humanScore = 0;
let computerScore = 0;

// playGame();


const humanChoice = document.querySelectorAll('.input');
const container = document.querySelector(".container");
const result = document.createElement("div");
const score = document.createElement("p");
let humanSelection;

humanChoice.forEach(choice => {
    choice.addEventListener("click", function (e) {
        humanSelection = choice.textContent;
        console.log(humanSelection);
        playRound(humanSelection, getComputerChoice());
        score.textContent = `Human Score: ${humanScore}; Computer Score: ${computerScore}`;
        container.append(result, score);
        if(humanScore >= 5) {
            result.textContent = "You Win! Congrats lol";
            score.textContent = "";
            container.append(result, score);
        }
        if(computerScore >= 5) {
            result.textContent = "You Lose ;-; oopsie";
            score.textContent = "";
            container.append(result, score);
        }
    });
});

function playRound(humanChoice, computerChoice) {
    let hc = humanChoice.toLowerCase();
    let cc = computerChoice.toLowerCase();
    if ((hc === "rock" && cc === "paper") || (hc === "paper" && cc === "scissors") || (hc === "scissors" && cc === "rock")) {
        computerScore = computerScore + 1;
        result.textContent = `You Lose! ${computerChoice} beats ${humanChoice}!`;
    }
    else if ((hc === "paper" && cc === "rock") || (hc === "scissors" && cc === "paper") || (hc === "rock" && cc === "scissors")) {
        humanScore = humanScore + 1;
        result.textContent = `You Win! ${humanChoice} beats ${computerChoice}!`;
    }
    else {
        result.textContent = `Draw!`;
    }
};

function getComputerChoice() {
    let x = Math.random();
    if (x <= 0.33) {
        console.log("Rock")
        return "Rock";
    }
    else if (x <= 0.67) {
        console.log("Paper")
        return "Paper";
    }
    else {
        console.log("Scissors")
        return "Scissors";
    }
};
// console.log(getHumanChoice());
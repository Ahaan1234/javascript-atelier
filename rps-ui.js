// console.log("Hello World!");

const button = document.querySelector(".get-input");
let humanScore = 0;
let computerScore = 0;

// playGame();


const humanChoice = document.querySelectorAll('.input');
let humanSelection;

humanChoice.forEach(choice => {
    choice.addEventListener("click", function (e) {
        humanSelection = choice.textContent;
        console.log(humanSelection);
        playRound(humanSelection, getComputerChoice());
    });
});

const result = document.createElement('.input');


function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

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
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`);
    }
    else if ((hc === "paper" && cc === "rock") || (hc === "scissors" && cc === "paper") || (hc === "rock" && cc === "scissors")) {
        humanScore = humanScore + 1;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}!`);
    }
    else {
        console.log(`Draw!`);
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

button.addEventListener("click", () => {
    let input = getHumanChoice();
    alert(input);
    alert(getComputerChoice());
});
// console.log(getHumanChoice());
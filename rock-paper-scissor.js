// console.log("Hello World!");

const button = document.querySelector(".get-input");

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
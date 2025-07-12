let input1, input2, operator;
operator = 0;
input1 = 0;

let displayNum = 0;
const display = document.querySelector("#display");

function operate(in1, in2, op) {
    if (op = 'add') return add(in1, in2);
    if (op = 'subtract') return subtract(in1, in2);
    if (op = 'multiply') return multiply(in1, in2);
    if (op = 'divide') return divide(in1, in2);
}

function add (in1, in2) {
    return in1 + in2;
}

function subtract (in1, in2) {
    return in1 - in2;
}

function multiply (in1, in2) {
    return in1 * in2;
}

function divide (in1, in2) {
    return in1 / in2;
}

const numberInputs = document.querySelectorAll("span");
numberInputs.forEach((numberInput) =>{
    numberInput.addEventListener("click", () => {
        let read = parseInt(numberInput.textContent,10);
        input1 = 10 * input1 + read;
        // console.log(input1)
        displayNum = input1;
        display.textContent = displayNum;
    });
});

const opInputs = document.querySelectorAll(".opPad > div");
opInputs.forEach((opInput) =>{
    opInput.addEventListener("click", () => {
        displayNum = 0;
        display.textContent = displayNum;
        console.log(opInput.textContent);
        operator = opInput.textContent;
        input2 = input1;
        input1 = 0;
    });
});
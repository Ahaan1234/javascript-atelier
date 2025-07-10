let input1, input2, operator;
operator = 0;

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
numberInputs.forEach((numberInput), function(e) => {
    
})
const string = "Hello World";
console.log(string);

// Sample "Bad declarations"
// const badString1 = This is a test;
// const badString2 = 'This is a test;
// const badString3 = This is a test';

// const name = "Ahaan";
// const greeting = `Hello, {name}`;
// console.log(greeting);

const button = document.querySelector("button");

function greet() {
    const name = prompt("What is your name?");
    const greeting = document.querySelector('#greeting');
    greeting.textContent = `Hello, ${name}, nice to see you!`;
}

button.addEventListener("click", greet);
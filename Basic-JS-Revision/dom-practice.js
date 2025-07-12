// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";

const header = document.createElement("h3");
header.style.color = "blue";
header.textContent = "Hey I'm a blue h3!";

const box = document.createElement("div");
box.style.cssText = "border: 4px solid black; background-color: pink";
box.innerHTML = "<h1> I'm in a div</h1> <p>ME TOO!</p>";

container.append(content, paragraph, header, box);

function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});



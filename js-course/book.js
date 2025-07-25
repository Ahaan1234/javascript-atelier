const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);

    const card = document.createElement("div");
    card.classList.add("bookCard");
    card.innerHTML = `
        <h3>${book.title}</h3>
        <p>by ${book.author}</p>
        <p>${book.pages} pages</p>
        <p>${book.isRead ? "Read" : "Not read"}</p>
    `;

    document.querySelector(".books").appendChild(card);
}

const button = document.querySelector("#newBook");

const newBookBtn = document.getElementById("newBook");
const dialog = document.getElementById("bookDialog");
const form = document.getElementById("bookForm");
const cancelBtn = document.getElementById("cancel");


button.addEventListener("click", function(e) {
    const card = document.createElement("div");  
    card.classList.add("bookCard");
    container.append(card);
})

button.addEventListener("click", () => {
    addBook.showModal();
})

addBook.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${favDialog.returnValue}.`;
})

function showLibrary(){
    myLibrary.forEach(function(book, index) {
        console.log(`Book at index ${index}: ${book.title}`);
    });
}
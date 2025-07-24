const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(Book(title, author, pages, read));
}

function showLibrary(){
    myLibrary.forEach(function(book, index) {
        console.log(`Book at index ${index}: ${book.title}`);
    });
}

const button = document.querySelector("#newBook");

button.addEventListener("click", )
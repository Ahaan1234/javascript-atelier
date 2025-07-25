const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read); // fixed
    myLibrary.push(newBook);
    return newBook;
    
}

const addBook = document.querySelector("#getBookInfo");


function showLibrary(){
    myLibrary.forEach(function(book, index) {
        console.log(`Book at index ${index}: ${book.title}`);
    });
}

const button = document.querySelector("#newBook");
const container = document.querySelector(".books")

button.addEventListener("click", function(e) {
    const card = document.createElement("div");  
    card.classList.add("bookCard");
    container.append(card);
})
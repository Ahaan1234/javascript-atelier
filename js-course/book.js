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

const newBookBtn = document.getElementById("newBook");
const dialog = document.getElementById("bookDialog");
const form = document.getElementById("bookForm");
const cancelBtn = document.getElementById("cancel");


// button.addEventListener("click", function(e) {
//     const card = document.createElement("div");  
//     card.classList.add("bookCard");
//     container.append(card);
// })

newBookBtn.addEventListener("click", () => {
  dialog.showModal(); // open dialog
});

cancelBtn.addEventListener("click", () => {
  dialog.close(); // close dialog manually
});


form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent default dialog close

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const pages = parseInt(document.getElementById("pages").value);
    const read = document.getElementById("read").checked;
    if (title && author && !isNaN(pages)) {
        const book = new Book(title, author, pages, read);
        addBookToLibrary(book);
        form.reset();
        dialog.close();
    } else {
        alert("Please fill in all fields.");
    }
});


function showLibrary(){
    myLibrary.forEach(function(book, index) {
        console.log(`Book at index ${index}: ${book.title}`);
    });
}
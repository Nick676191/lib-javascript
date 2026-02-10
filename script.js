const myLibrary = [];
// create table
let tableDiv = document.querySelector(".tbl-container");
let table = document.createElement("table");
let header = document.createElement("tr");

// adding logic for add books button to be placed in the table container
let addBookBtn = document.createElement("button");
addBookBtn.textContent = "Add Book"
tableDiv.appendChild(addBookBtn);

// creating table framework in js code
const headOne = document.createElement("th");
headOne.append("id")

const headTwo = document.createElement("th");
headTwo.append("title");

const headThree = document.createElement("th");
headThree.append("author");

const headFour = document.createElement("th");
headFour.append("pages");

const headFive = document.createElement("th");
headFive.append("read");

const headSix = document.createElement("th");
headSix.append("remove");

header.appendChild(headOne);
header.appendChild(headTwo);
header.appendChild(headThree);
header.appendChild(headFour);
header.appendChild(headFive);
header.appendChild(headSix);

tableDiv.appendChild(table);
table.appendChild(header);

function createRemoveBtn() {
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Delete";
    removeBtn.className = "remove";
    removeBtn.style.padding = "2px";
    
    return removeBtn;
};

function Book(title, author, pages, read) {
    // object constructor
    if (!new.target) {
        throw error("You need to use the `new` keyword when declaring this object constructor")
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.remove = createRemoveBtn();
};

function addBookToLibrary(title, author, pages, read) {
    // take params, create a book then store it in the array
    const newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);

    return newBook
};

function removeBookFromLibrary() {
    let delBtns = document.querySelectorAll(".remove");
    for (btn of delBtns) {
        const btnCont = btn.parentElement;
        const btnRow = btnCont.parentElement;
        btn.addEventListener("click", () => {
            // delete the specific row that I clicked the delete button within
            btnRow.remove();
        });
    };
};

function displayBook(book) {
    const row = document.createElement("tr");
    table.appendChild(row);
    for (const key in book) {
        const dataCell = document.createElement("td");
        dataCell.append(book[key]);
        row.appendChild(dataCell);
    };
};

function displayBooks() {
    for (const book of myLibrary) {
        displayBook(book);
    };
};

function addBookFromDialog() {
    const myForm = document.querySelector("form");
    const dialog = document.querySelector("dialog");

    myForm.addEventListener("submit", (event) => {
        // preventing page from reloading
        event.preventDefault();
        // add a row and move the contents from the form into that new row
        const formData = new FormData(event.target);
        const bookInfo = formData.getAll("book");
        if (!bookInfo[3]) {
            const new_book = addBookToLibrary(bookInfo[0], bookInfo[1], bookInfo[2], false);
            displayBook(new_book);
        } else {
            const new_book = addBookToLibrary(bookInfo[0], bookInfo[1], bookInfo[2], true);
            displayBook(new_book);
        }
        removeBookFromLibrary();
        dialog.close();
        myForm.reset();
    });
};

function dialogOperator() {
    const dialog = document.querySelector("dialog");
    const showBtn = document.querySelector(".tbl-container > button");
    const closeBtn = document.querySelector(".close");

    // show when the dialog button is clicked 
    showBtn.addEventListener("click", () => {
        dialog.showModal();
    });

    // close the dialog when button clicked
    closeBtn.addEventListener("click", () => {
        dialog.close()
    });
};

addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 322, true);
addBookToLibrary("The Dead Zone", "Stephen King", 528, false);
addBookToLibrary("Frankenstein", "Mary Shelley", 352, false);
displayBooks();
addBookFromDialog();
removeBookFromLibrary();
dialogOperator();
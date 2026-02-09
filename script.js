const myLibrary = [];

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
};

function addBookToLibrary(title, author, pages, read) {
    // take params, create a book then store it in the array
    const newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
};

function displayBooks() {
    // create table
    const tableDiv = document.querySelector(".tbl-container");
    const table = document.createElement("table");
    const header = document.createElement("tr");
    
    // adding logic for add books button to be placed in the table container
    const addBookBtn = document.createElement("button");
    addBookBtn.textContent = "Add Book"
    tableDiv.appendChild(addBookBtn);

    if (myLibrary.length > 0) {
        for (const headerKey in myLibrary[0]) {
            const headerItem = document.createElement("th");
            headerItem.append(headerKey);
            header.appendChild(headerItem);
        };
    } else {
        const headOne = document.createElement("th");
        headOne.appendChild("id")

        const headTwo = document.createElement("th");
        headTwo.appendChild("title");

        const headThree = document.createElement("th");
        headThree.appendChild("author");

        const headFour = document.createElement("th");
        headFour.appendChild("pages");

        const headFive = document.createElement("th");
        headFive.appendChild("read");

        header.appendChild(headOne);
        header.appendChild(headTwo);
        header.appendChild(headThree);
        header.appendChild(headFour);
        header.appendChild(headFive);
    };

    tableDiv.appendChild(table);
    table.appendChild(header);

    for (const book of myLibrary) {
        const row = document.createElement("tr");
        table.appendChild(row);
        for (const key in book) {
            const dataCell = document.createElement("td");
            dataCell.append(book[key]);
            row.appendChild(dataCell);
        };
    };
};

addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 322, true);
addBookToLibrary("The Dead Zone", "Stephen King", 528, false);
addBookToLibrary("Frankenstein", "Mary Shelley", 352, false);
displayBooks();
console.log(myLibrary);
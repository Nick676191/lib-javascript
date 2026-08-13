# Online Library

## Description
The Online Library is a JavaScript application that enables users to manage a collection of books. It allows for easy addition and removal of books, while displaying relevant details such as title, author, page count, and whether the book has been read. The application showcases fundamental concepts in JavaScript, such as object-oriented programming and DOM manipulation.

## Key Features
- **Add Books**: Users can input details for new books using a dialog form.
- **Remove Books**: Books can be easily removed from the list.
- **Display Books**: All books are displayed in an organized table format.

## Installation Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/lib-javascript.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd lib-javascript
   ```

3. **Open `index.html`**:
   You can open the `index.html` file in any web browser to start using the Online Library.

4. **Dependencies**: 
   This project does not require any additional libraries or frameworks.

## Usage Examples
1. Open the application in a web browser.
2. Click the "Add Book" button to open the dialog form.
3. Fill in the book's title, author, page count, and check the "Read?" checkbox if applicable.
4. After clicking "Add", the book will be displayed in the table.
5. To remove a book, click on the corresponding "Delete" button.

## File/Project Overview
- **index.html**: The main HTML structure of the application, which includes the form to add new books and the display for the book list.
- **script.js**: The primary JavaScript logic that handles book construction, storage, and DOM manipulation to display books in the table.
- **style.css**: Basic styling for the application, including styling for the book table, buttons, and the dialog modal.

### File Contents
- **`index.html`**:
    - Defines the basic structure of the app and includes references to CSS and JavaScript files.
  
- **`script.js`**:
    - Contains all the JavaScript logic to manage the book collection:
        - Book constructor
        - Functions to add, remove, and display books
        - Event listeners for user interactions

- **`style.css`**:
    - Provides styles for the book table, buttons, and dialog to enhance user experience.

### Example Code Snippets
#### Book Constructor
```javascript
function Book(title, author, pages, read) {
    if (!new.target) {
        throw error("You need to use the `new` keyword when declaring this object constructor");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = checkNoCheck(read);
    this.remove = createRemoveBtn();
};
```

#### Adding a Book
```javascript
const newBook = addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
displayBook(newBook);
```

#### Removing a Book
```javascript
btn.addEventListener("click", () => {
    btnRow.remove();
});
```

This README provides a complete guide for understanding and using the Online Library application.
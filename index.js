// eslint-disable-next-line no-unused-vars
const myLibrary = ['The Hobbit', 'Harry Potter', 'Bridgerton'];

// eslint-disable-next-line no-unused-vars
function Book(title, author) {
  this.title = title;
  this.author = author;
}

// eslint-disable-next-line no-unused-vars
function addBookToLibrary(title, author) {
    let book = New Book(title, author);
    myLibrary.push(book);
}

// Adding some books to the library
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee");
addBookToLibrary("1984", "George Orwell");

function displayBooks() {
  myLibrary.forEach((book, index) => {
    console.log(`Book ${index+1}:`);
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log('------------------------');
  });
}

displayBooks();
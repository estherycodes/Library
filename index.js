let myLibrary = ['The Hobbit', 'Harry Potter', 'Bridgerton'];

function book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary(title, author) {
    let book = New book(title, author);
    myLibrary.push(book);
}

// Adding some books to the library
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee");
addBookToLibrary("1984", "George Orwell");

function displayBooks() {

  const main = document.querySelector('main');

  myLibrary.forEach((book, index) => {
    const div = document.createElement('div');

    let bookText = `Book ${index+1}:<br>`;
    bookText += `Title: ${book.title}<br>`;
    bookText += `Author: ${book.author}<br>`;
    bookText += '------------------------';

    div.innerHTML = bookText;
    
    main.appendChild(div);
  });
}

displayBooks(); 

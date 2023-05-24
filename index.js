/* eslint-disable space-infix-ops */
/* eslint-disable prefer-const */
let myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary(title, author) {
  let novel = new Book(title, author);
  myLibrary.push(novel);
}

// Adding some books to the library
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee');
addBookToLibrary('1984', 'George Orwell');

// book colors
let colors = ['#EF7E6B', '#98D4E1', '#D7C8B5', '#FDD28A'];

function displayBooks() {
  const main = document.querySelector('main');

  myLibrary.forEach((book, index) => {
    const div = document.createElement('div');
    div.classList.add('bookCard');

    let bookText = `${book.title}<br>`;
    bookText += `By: ${book.author}<br>`;

    div.innerHTML = bookText;

    div.style.backgroundColor = colors[index % colors.length];

    main.appendChild(div);
  });
}

displayBooks();

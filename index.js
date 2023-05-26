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
    main.appendChild(div);
    div.classList.add('bookCard');

    let bookText = `${book.title}<br>`;
    bookText += `By: ${book.author}<br>`;

    div.innerHTML = bookText;

    div.style.backgroundColor = colors[index % colors.length];
  });
}

displayBooks();

let button = document.querySelector('button');
let header = document.querySelector('header');

function handleClick() {
  const div = document.createElement('div');
  header.appendChild(div);
  div.classList.add('bookform');
  div.innerHTML = `
  <h1 class="formHeader">Add Your Book!</h1><br><br>
  <form>
    <label for="author">Author:</label><br><br>
    <input type="text" id="author"><br><br>
    <label for="title">Title:</label><br><br>
    <input type="text" id="title"><br><br>
    <label for="pages">Number of Pages:</label><br><br>
    <input type="number" id="pages"></input><br><br>
    <input type="submit" value="submit">
  </form> 
`;
  document.querySelector('.overlay').style.display = 'block';
}

button.addEventListener('click', handleClick);

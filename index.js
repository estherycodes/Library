const myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary(title, author) {
  const novel = new Book(title, author);
  myLibrary.push(novel);
}

// Adding some books to the library
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee');
addBookToLibrary('1984', 'George Orwell');

// book colors
const colors = ['#EF7E6B', '#98D4E1', '#D7C8B5', '#FDD28A'];

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

const button = document.getElementsByClassName('addBook')[0];
const header = document.querySelector('header');
const form = document.querySelector('form');

function handleCancel() {
  const formdiv = document.getElementsByClassName('bookform')[0];
  formdiv.parentNode.removeChild(form);

  document.querySelector('.overlay').style.display = 'none';
}

function handleClick() {
  const div = document.createElement('div');
  header.appendChild(div);
  div.classList.add('bookform');
  div.innerHTML = `
  <h1 class="formHeader">Add Your Book!</h1><br>
  <button class="cancel">x</button>
  <form>
    <label for="author">Author:</label><br><br>
    <input type="text" id="author" class="text-box" name="author"><br><br>
    <label for="title">Title:</label><br><br>
    <input type="text" id="title" class="text-box" name="title"><br><br>
    <label for="read">
      Have you read this?
      <input type="checkbox" id="read" name="read?" value="Read?" class="check">
    </label><br><br>
    <input type="submit" value="submit" class="submit">
  </form> 
`;
  document.querySelector('.overlay').style.display = 'block';

  const cancel = document.getElementsByClassName('cancel')[0];
  cancel.addEventListener('click', handleCancel);
}

button.addEventListener('click', handleClick);

function handleBook(event) {
  event.preventDefault();
  // prevent the form from being submitted normally

  const author = document.querySelector('#author').value;
  const title = document.querySelector('#title').value;

  // Now you can do something with the form data...
  addBookToLibrary(title, author);
  displayBooks();
}

form.addEventListener('submit', handleBook);

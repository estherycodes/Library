const myLibrary = [];

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

function bookshelf() {
  const emptyBookshelf = document.querySelector('.bookshelf');
  if (emptyBookshelf) {
    if (myLibrary.length === 0) {
      emptyBookshelf.style.backgroundColor = 'transparent';
    } else {
      emptyBookshelf.style.backgroundColor = '#CA9A47';
    }
  }

  // if (myLibrary.length >= 10) {
  // const secondShelf = new Array[];
  // secondShelf.push(novel);
  // bookshelf();
  // }
}

function addBookToLibrary(title, author, read) {
  const novel = new Book(title, author, read);
  myLibrary.push(novel);
  bookshelf();
}

function deleteBook(event) {
  const bookCard = event.target.parentNode; // get the parent element (the book card)
  bookCard.remove();
}

// book colors
const colors = ['#EF7E6B', '#98D4E1', '#D7C8B5', '#FDD28A'];

function displayBooks() {
  const main = document.querySelector('main');

  bookshelf();

  // Clear the main element
  while (main.firstChild) {
    main.firstChild.remove();
  }

  // Create a new div for each book
  myLibrary.forEach((book, index) => {
    const div = document.createElement('div');
    const cancel = document.createElement('button');
    const read = document.createElement('button');
    cancel.classList.add('cancel');
    read.classList.add('cancel');
    main.appendChild(div);
    div.classList.add('bookCard');

    div.appendChild(cancel);
    cancel.innerText = 'x';
    cancel.addEventListener('click', deleteBook);

    div.appendChild(read);
    read.innerText = 'R';
    read.addEventListener('click', () => {
      book.read = !book.read;
      div.style.backgroundColor = book.read ? colors[index % colors.length] : '#E0E0E0';
    });

    // Add the book title and author to the div
    let bookText = `Book: ${book.title}<br>`;
    bookText += `Author: ${book.author}<br>`;

    div.innerHTML += bookText;

    if (book.read) {
      div.style.backgroundColor = colors[index % colors.length];
    } else {
      div.style.backgroundColor = '#E0E0E0';
    }
  });
}

displayBooks();

const button = document.getElementsByClassName('addBook')[0];
const header = document.querySelector('header');

function handleCancel() {
  const formDiv = document.querySelector('.bookform');
  if (formDiv) {
    header.removeChild(formDiv);
    document.querySelector('.overlay').style.display = 'none';
  }
}

function handleSubmit(event) {
  event.preventDefault();
  // prevent the form from being submitted normally

  const author = document.querySelector('#author').value;
  const title = document.querySelector('#title').value;
  const read = document.querySelector('.check').checked;

  // Now you can do something with the form data...
  addBookToLibrary(title, author, read);
  displayBooks();
  handleCancel();
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

  const form = div.querySelector('form');
  form.addEventListener('submit', handleSubmit);

  const cancel = div.querySelector('.cancel');
  cancel.addEventListener('click', handleCancel);
}

button.addEventListener('click', handleClick);

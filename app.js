/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */

let Books = JSON.parse(localStorage.getItem('Books')) ?? [];

class Book {
  constructor(title, author) {
    this.id = Math.random() * 100;
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor(book) {
    this.book = book;
  }

  addBook() {
    Books.push(this.book);
    localStorage.setItem('Books', JSON.stringify(Books));
  }

  removeBook(book) {
    Books = Books.filter((bookObj) => bookObj.id !== book.id);
    localStorage.setItem('Books', JSON.stringify(Books));
  }
}

function displayBook() {
  const bookListDiv = document.querySelector('.book-list');
  bookListDiv.innerHTML = '';
  const bookList = document.createElement('ul');
  Books.forEach((element, idx) => {
    const li = document.createElement('li');
    li.setAttribute('id', element.id);
    li.innerHTML = `
    <p> "${element.title}" By ${element.author} </p> 
    `;
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    const library = new Library();
    removeBtn.addEventListener('click', () => {
      library.removeBook(element);
      li.remove();
      displayBook();
    });
    li.appendChild(removeBtn);
    if (idx % 2 === 0) {
      li.classList.add('dark');
    } else {
      li.classList.add('light');
    }
    bookList.appendChild(li);
  });
  bookListDiv.appendChild(bookList);
}

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;

  if ((title && author) !== '') {
    const book = new Book(title, author);
    const library = new Library(book);
    library.addBook();
    displayBook();
  }
});

displayBook();

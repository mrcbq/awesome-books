let Books = JSON.parse(localStorage.getItem('Books' || '[]'));

function removeBook(title) {
  const book = document.getElementById(title);
  book.remove();
  Books = Books.filter((bookObj) => bookObj.title !== title);
  localStorage.setItem('Books', JSON.stringify(Books));
}

function addBook(bookObj) {
  const bookList = document.getElementById('book-list');
  const book = document.createElement('li');
  book.setAttribute('id', bookObj.title);
  book.innerHTML = `
      <h3> ${bookObj.title} </h3> 
      <p>  ${bookObj.author} </p>
      `;
  const removeBtn = document.createElement('button');
  removeBtn.innerHTML = 'Remove';
  removeBtn.addEventListener('click', () => removeBook(bookObj.title));
  book.appendChild(removeBtn);
  bookList.appendChild(book);
}

Books.forEach((book) => {
  addBook(book);
});

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = {};
  book.title = document.getElementById('book-title').value;
  book.author = document.getElementById('book-author').value;

  if ((book.title && book.author) !== '') {
    Books.push(book);
    localStorage.setItem('Books', JSON.stringify(Books));
    addBook(book);
  }
});

let Books = JSON.parse(localStorage.getItem('Books')) ?? [];

function removeBook(id) {
  const book = document.getElementById(id);
  book.remove();
  Books = Books.filter((bookObj) => bookObj.id !== id);
  localStorage.setItem('Books', JSON.stringify(Books));
}

function displayBook(id, title, author) {
  const bookList = document.getElementById('book-list');
  const li = document.createElement('li');
  li.setAttribute('id', id);
  li.innerHTML = `
      <h3> ${title} </h3> 
      <p>  ${author} </p>
      `;
  const removeBtn = document.createElement('button');
  removeBtn.innerHTML = 'Remove';
  removeBtn.addEventListener('click', () => removeBook(id));
  li.appendChild(removeBtn);
  bookList.appendChild(li);
}

function addNewBook(title, author) {
  const book = {};
  book.id = Books.length;
  book.title = title;
  book.author = author;
  Books.push(book);
  localStorage.setItem('Books', JSON.stringify(Books));
  return book.id;
}

Books.forEach((book) => {
  displayBook(book.id, book.title, book.author);
});

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;
  if ((title && author) !== '') {
    const id = addNewBook(title, author);
    displayBook(id, title, author);
  }
});

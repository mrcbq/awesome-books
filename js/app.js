let Books = [];

function getInput(){
    const book = {};
    book.title = document.getElementById('book-title').value;
    book.author = document.getElementById('book-author').value;
    return book;
}

function removeBook(title) {
    const book = document.getElementById(title);
    book.remove();
    Books = Books.filter((bookObj) => bookObj.title !== title);
    localStorage.setItem('Books', JSON.stringify(Books));
}
  
  function addBook(bookObj) {
    const bookList = document.getElementById('book-list');
    const book = document.createElement('LI');
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

const addButton = document.getElementById('btn-add');
addButton.addEventListener('click', () => {
  const book = getInput();
  Books.push(book);
  localStorage.setItem('Books', JSON.stringify(Books));
  addBook(book);
});

window.onload = () => {
    Books = JSON.parse(localStorage.getItem('Books' || '[]'));
    if (Books === null) {
      Books = [];
      return;
    }
  
    Books.forEach((book) => {
      addBook(book);
    });
  };



// Books.map((obj) => {
//     bookList.innerHTML += `
//     <p>${obj.title}</p>
//     <p>${obj.author}</p>
//     <button>Remove</button>
//     `;
// });

//LOCAL STORAGE

// const formValidator = document.getElementById('form-add_book');
// const bTitle = document.getElementById('title')
// const bAuthor = document.getElementById('author')
// const dataBooks = localStorage.getItem('');
// const localStorage = JSON.parse(dataBooks);

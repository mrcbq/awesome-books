const bookList = document.querySelector('.book-list')

const Books = [
{
    title: 'Libro1',
    author: 'Autor1',
}
]

Books.map((obj) => {
    bookList.innerHTML += `
    <p>${obj.title}</p>
    <p>${obj.author}</p>
    <button>Remove</button>
    `;
});

//LOCAL STORAGE

const formValidator = document.getElementById('form-add_book');
const bTitle = document.getElementById('title')
const bAuthor = document.getElementById('author')
const dataBooks = localStorage.getItem('');
const localStorage = JSON.parse(dataBooks);

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


class Book {
    constructor(title,author,pages,read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class UI {
    static displayBooks() {
        const storedBooks = [
            {
                title: 'Lord of the Rings',
                author: 'J. R. R. Tolkien',
                pages: '100',
                read: 'Yes'
            },
            {
                title: 'Game of Thrones',
                author: 'George R. R. Martin',
                pages: '500',
                read: 'Yes'
            }
        ]

        const books = storedBooks

        books.forEach((book) => UI.addBookToList(book))
    }

   static addBookToList(book) {
    const list = document.querySelector('.list')

    const row = document.createElement('tr')

    row.innerHTML = `
        <td>${book.title}</tdJavaScript BookList App | No Frameworks>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.read}</td>
        <td><button class = 'btn'>X</td>
    `

    list.appendChild(row)
   }

   static clearField() {
    document.querySelector('title').value = '';
    document.querySelector('author').value = '';
    document.querySelector('pages').value = '';
    document.querySelector('read').value = '';
   }
}


document.addEventListener('DOMContentLoaded', UI.displayBooks)

document.querySelector('.bookForm').addEventListener('submit',(e) => {

    e.preventDefault();


    const title = document.querySelector('#title').value; 
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').value;

    
    const book = new Book(title, author, pages, read)

    
    UI.addBookToList(book);
    
})
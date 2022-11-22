
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
        const books = Store.getBooks()

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

   static deleteBook(el) {
        if(el.classList.contains('btn')) {
            el.parentElement.parentElement.remove()
        }
   }

   static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#read').checked = false;
   }
}

class Store {
   
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = []
        } else {
            books = JSON.parse(localStorage.getItem('books'))
        }

        return books
    }
    
    static addBook(book) {
        const books = Store.getBooks();
        books.push(book)
        localStorage.setItem('books', JSON.stringify(books))
    }

    static removeBook(pages) {
        const Books = Store.getBooks();

        books.forEach((book, index) => {
            if(book.pages === pages) {
                books.splice(index, 1)
            }
        })

        localStorage.setItem('books', JSON.stringify(books))
    }
}



document.addEventListener('DOMContentLoaded', UI.displayBooks)

document.querySelector('.bookForm').addEventListener('submit',(e) => {

    e.preventDefault();


    const title = document.querySelector('#title').value; 
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;

    
    const book = new Book(title, author, pages, read)

    
    UI.addBookToList(book);
    Store.addBook(book)
    UI.clearFields();
    
})


document.querySelector('.list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
})
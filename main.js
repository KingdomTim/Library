
let myLibrary = []

function Book() {
    this.title = title
    this.author = author 
    this.pages = pages 
    this.read = read
    this.info = function () {
        return (title + author + ", " + pages + ", " + read)
    }
}

function addBookToLibrary() {
    let book = new Book(title, author, pages, read) 
    myLibrary.push(book)
}
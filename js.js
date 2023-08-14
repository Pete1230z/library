let myLibrary = []

function book(name, pages, read) {
	this.name = name
	this.pages = pages
	this.read = read
}

function addToLibrary () {

}

const bookAddition = document.getElementsByClassName('addBook').addEventListener('click', function () {
	addToLibrary()
})
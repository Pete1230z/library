let myLibrary = []

function book(name, pages, read) {
	this.name = name
	this.pages = pages
	this.read = read
}

function addToLibrary () {

}

const bookAddition = document.getElementById('addBookButton');

bookAddition.addEventListener('click', function() {
    addBookDiv.style.display = 'flex'
})
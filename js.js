let myLibrary = []

function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
}


function addToLibrary () {
	const title = getElementById('title').value
	const author = getElementById('author').value
	const pages = getElementById('pages').value
	const read = getElementById('read').checked
    
	const newBook = new Book(title, author, pages, read)
}

/*Makes form appear when Add Book is clicked on*/

const bookAddition = document.getElementById('addBookButton');

bookAddition.addEventListener('click', function() {
    addBookDiv.style.visibility = 'visible'
	addBookDiv.style.opacity = '1'
})

document.getElementById('submit').addEventListener('click', function() {
	event.preventDefault();
	alert('Hey')
})
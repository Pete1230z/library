let myLibrary = []

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}


function addToLibrary() {
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const pages = document.getElementById('pages').value;
	const read = document.getElementById('read').checked; 
	const newBook = new Book(title, author, pages, read);
	console.log(newBook);
}

/*Makes form appear when Add Book is clicked on*/

const bookAddition = document.getElementById('addBookButton');

bookAddition.addEventListener('click', function() {
    addBookDiv.style.visibility = 'visible';
	addBookDiv.style.opacity = '1';
})

document.getElementById('form').addEventListener('submit', function() {
	event.preventDefault();
	addToLibrary();
})
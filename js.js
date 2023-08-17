let myLibrary = []

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function renderHtml (book) {

	//Gets the shelf id
	const bookShelf = document.getElementById('shelf');

	//Creates a new div
	const newDiv = document.createElement('div');

	//Passes in text content from book information passed in the form
	newDiv.textContent = `${book.title}, ${book.author}, ${book.pages}, ${book.read}`;

	newDiv.className = 'shelf'

	//Appends the new div created to the div with the shelf class
	bookShelf.appendChild(newDiv);
}

function addToLibrary() {
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const pages = document.getElementById('pages').value;
	const read = document.getElementById('read').checked; 
	const newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook);

	//Sends new book information to the renderHtml function
	renderHtml(newBook);
}

//Makes form appear when Add Book is clicked on
const bookAddition = document.getElementById('addBookButton');

bookAddition.addEventListener('click', function() {
    addBookDiv.style.visibility = 'visible';
	addBookDiv.style.opacity = '1';
})

//When anywhere but the form is clicked on it will make the form disappear
document.addEventListener('click',function(event) {
     if(!addBookDiv.contains(event.target) && event.target !== bookAddition) { 
	 addBookDiv.style.visibility = 'hidden';
	 addBookDiv.style.opacity = '0';
	 document.querySelectorAll('#formGroup').innerHTML = ''
	 }
})

//When form is submitted it prevents information from being sent to backend and calls the addToLibrary function
document.getElementById('form').addEventListener('submit', function() {
	event.preventDefault();
	addToLibrary();
})
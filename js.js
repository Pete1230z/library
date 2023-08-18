let myLibrary = []

function Book(title, author, pages, readStatus) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readStatus = readStatus;
}

//Takes the elements passed in addToLibrary and adds them to the HTML
function renderHtml(book) {

	const bookShelf = document.getElementById('shelf');
	const newDiv = document.createElement('div');
	newDiv.className = 'shelfFormat'
	const buttonContainer = document.createElement('div')
	buttonContainer.className = 'btnContainer'

	//Creates a div for each element so they can be styled more easily
	const titleDiv = document.createElement('div');
	titleDiv.textContent = `${book.title}`;
    const authorDiv = document.createElement('div');
	authorDiv.textContent = `${book.author}`;
	const pagesDiv = document.createElement('div');
	pagesDiv.textContent = `${book.pages}`;
	const readDiv = document.createElement('button');
	readDiv.textContent = `${book.readStatus}`;
	readDiv.className = 'reader';
	const deleteDiv = document.createElement('button')
	deleteDiv.textContent = 'Delete';
	deleteDiv.className = 'del';

	//Updates button color based on if it is read or not read when initially created by form
	function updateButtonColor() {
		if(book.readStatus === 'Read') {
			readDiv.style.backgroundColor = '#167fc5';
			readDiv.addEventListener('mouseover', function() {
				readDiv.style.backgroundColor = '#167fc5';
				readDiv.style.opacity = '0.8';
			})
			readDiv.addEventListener('mouseout', function() {
				readDiv.style.backgroundColor = '#167fc5';
				readDiv.style.opacity = '1';
			})
		} else {
			readDiv.style.backgroundColor = '#CCCCCC';
			readDiv.addEventListener('mouseover', function() {
				readDiv.style.backgroundColor = '#CCCCCC';
				readDiv.style.opacity = '0.8';
			})
			readDiv.addEventListener('mouseout', function() {
				readDiv.style.backgroundColor = '#CCCCCC';
				readDiv.style.opacity = '1';
			})
		}
	}

	//States how read/not read button will act when it is clicked on after it has been created in the form
	function toggleReadStatus() {
		book.readStatus = book.readStatus === 'Read' ? 'Not Read' : 'Read';
		readDiv.textContent = book.readStatus;
		updateButtonColor();
	}

	//Changes toggleReadStatus everytime it is clicked on
	readDiv.addEventListener('click', toggleReadStatus);

    buttonContainer.appendChild(readDiv);
	buttonContainer.appendChild(deleteDiv);

	//Appends the divs being created to newDiv
    newDiv.appendChild(titleDiv);
	newDiv.appendChild(authorDiv);
	newDiv.appendChild(pagesDiv);
	newDiv.appendChild(buttonContainer);

	//Appends the new div created to the div with the shelf class
	bookShelf.appendChild(newDiv);
	updateButtonColor();
}

//Gets the values of the form inputs
function addToLibrary() {
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const pages = document.getElementById('pages').value;
	const read = document.getElementById('read').checked;
	const readStatus = read ? 'Read' : 'Not Read';

	const newBook = new Book(title, author, pages, readStatus);
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

	 //Resets all values in form inputs when clicked out of form
	 document.getElementById('title').value = ''
	 document.getElementById('author').value = ''
	 document.getElementById('pages').value = ''
	 document.getElementById('read').checked = false
	 }
})

//When form is submitted it prevents information from being sent to backend and calls the addToLibrary function
document.getElementById('form').addEventListener('submit', function() {
	event.preventDefault();
	addToLibrary();
})


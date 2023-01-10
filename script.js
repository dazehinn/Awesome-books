// function to specify name and author of a book
function Book(name, author) {
  this.name = name;
  this.author = author;
}
// create booksArray and set it to empty if localStorage is null
const booksArray = JSON.parse(localStorage.getItem('books')) || [];

// variables decleration
const btnAdd = document.getElementById('btn-add');
const listSec = document.getElementById('list-sec');
const title = document.getElementById('title');
const author = document.getElementById('author');

// function to show list of books
function showList() {
  let listHtml = '';
  for (let i = 0; i < booksArray.length; i += 1) {
    listHtml += `
    <div class="book-row" id="book-${i}"></div>
    <p>${booksArray[i].name}</p>
    <p>${booksArray[i].author}</p>
    <button id="btn-book-${i}" data-index=${i} class="btn-remove">Remove</button>
    <hr>
    </div>
    `;
  }
  listSec.innerHTML = listHtml;
}
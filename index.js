function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(books => renderBooks(books));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name; // Use textContent for best practice
    main.appendChild(h2);
  });
}

function addingEventListener() {
  const button = document.getElementById('button');
  button.addEventListener('click', function() {
    alert('I was clicked!');
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  addingEventListener();
});
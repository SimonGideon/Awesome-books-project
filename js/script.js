class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
// variable declaration
const books = [];
const ids = books.length + 1;
const storeObj = JSON.stringify(books)
localStorage.setItem('data', storeObj)
function displayBook() {
  if (books.length === 0) {
    const bookList = document.querySelector("#bookList");
    bookList.innerHTML = "";
  } else {
    const shelveDiv = document.getElementById("bookList");
    function bookShelve(bookItems) {
      return `
            <div id="individual-list">
                <p>${bookItems.title}</p>
                <p>${bookItems.author}</p>
                <button type="submit" id="btn">Remove</button>
                <hr/>
              </div>
            `;
    }
    shelveDiv.innerHTML = `
        
        ${books.map(bookShelve).join("")}
        
        `
  }
}

function removeBook() {
  const btn = document.querySelectorAll('#btn');
  btn.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const drop = e.target.parentElement.id;
      removeBook(drop);
      displayBook();
    });
  });
}

function addBook() {
  const form = document.querySelector("#form");
  const titled = document.querySelector("#title").value;
  const authored = document.querySelector("#author").value;
  console.log(titled);
  books.push({ id: ids, title: titled, author: authored });
  displayBook();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook();
});

function loop () {
  displayBook();
}

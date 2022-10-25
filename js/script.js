// variable declaration
const books = [
  {
    id: 1,
    title: "River and the source",
    author: "Margeret Ogola",
  },
  {
    id: 2,
    title: "The Caucasian Chalk Circle",
    author: "Bertolt Brecht",
  },
];

const loop = () => {
  let look;
  for (let i = 0; i < books.length; i++) {
    look = books[i].a;
  }
  removeBook(look)
};

let id = books.length + 1;

// remove a book in the shelve
function removeBook(drop) {
  const filt = books.filter((a, i) => {
    if (drop == a.id) {
      books.splice(i, 1);
    }
  });
}

const titled = document.getElementById("title").value;
const authored = document.getElementById('title').value;
const addbtn = document.getElementById('addme');
// adding a book
let addBook = (title, author) => {
    books.push({
      id:id,
      title: `${title}`,
      author: `${author}`,
    });
  };

  addbtn.onclick = addBook(titled, authored);
  

  // dynamic data display
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
  
  `;
  loop();
  const button = document.getElementById("btn");
  button.onclick = loop;

console.log(look);
const books = [
    {
        id: 1,
        title: 'River and the source',
        author: 'Margeret Ogola'
    },
    {
        id: 2,
        title: 'The Caucasian Chalk Circle',
        author: 'Bertolt Brecht'
    }
];

// adding a book
let addBook = (title, author) => {
    books.push({
        title: `${title}`,
        author: `${author}`
    })
}
// remove a book in the shelve
const loop = ()=>{
    for(let i=0; i<books.length; i++){
        return i;
    }
}
let id = books.length +1;
function removeBook(drop){
    const filt = books.filter((a,i)=>{
        if(drop == a.id){
            books.splice(i, 1);
        }
    });
    loop
}

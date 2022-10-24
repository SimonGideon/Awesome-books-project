const books = [
    {
        title: 'River and the source',
        author: 'Margeret Ogola'
    },
    {
        title: 'The Caucasian Chalk Circle',
        author: 'Bertolt Brecht'
    }
];

// adding a book
function addBook (title, author){
    books.push({
        title: `${title}`,
        author: `${author}`
    })
}

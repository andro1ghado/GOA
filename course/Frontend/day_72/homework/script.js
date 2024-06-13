/*
    homework:

    Object Literal



    Part 1 - Creating an Object Literal

    Create an object literal called book with the following properties:
    title: "The Great Gatsby"
    author: "F. Scott Fitzgerald"
    year: 1925
    getSummary: A method that returns a string summarizing the book, e.g., "The Great Gatsby by F. Scott Fitzgerald, published in 1925."


    Part 2 -  Accessing and Modifying Properties

    Access and log the title and author of the book to the console.
    Change the year property to 2021 and log the updated year to the console.

    Part 3 - Using the Method

    Call the getSummary method and log the returned string to the console.

*/

/* object literal homework: */

// let objLiteral = {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     year: 1925,
//     getSummary() {
//         console.log(`${objLiteral.title} by ${objLiteral.author}, published in ${objLiteral.year}`);
//     }
// }

// objLiteral['year'] = 2021
// console.log(objLiteral.getSummary())

/*

    object constructor homework:

    Part 1 - Define a constructor function called Book that takes title, author, and year as parameters and assigns them to the object.
    
    Add a method called getSummary to the Book prototype that returns a string summarizing the book, e.g., "Title by Author, published in Year."
    Creating Instances
    
    Part 2 - Use the Book constructor to create three instances:
    
    book1: "To Kill a Mockingbird" by Harper Lee, published in 1960.
    book2: "1984" by George Orwell, published in 1949.
    book3: "Moby Dick" by Herman Melville, published in 1851.
    Using the Instances
    
    Part 3 - Log the title and author of each book to the console.
    
    Call the getSummary method on each instance and log the returned strings to the console.
*/

function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    this.getSummary = function() {
        return `"${this.title}" by ${this.author}, published in ${this.year}`
    }
}

let book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960)
let book2 = new Book('1984', 'George Orwell', 1949)
let book3 = new Book('Moby Dick', 'Herman Melville', 1851)

console.log(book1.getSummary())
console.log(book2.getSummary())
console.log(book3.getSummary())
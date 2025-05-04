function Book(title, author) {
  return {
    title,
    author,
    details() {
      return `"${this.author}" is an author of book named "${this.title}".`;
    },
  };
}

function CreateLibrary() {
  let library = [];
  return {
    addBook(title, author) {
      let newBook = Book(title, author);
      library.push(newBook);
    },
    removeBook(title) {
      library = library.filter((book) => book.title !== title);
    },
    listBooks() {
      return library.map((book) => book.details());
    },
  };
}

let lib = CreateLibrary();

lib.addBook("book1", "author1");
lib.addBook("book2", "author2");
lib.removeBook("book1");

console.log(lib.listBooks());

lib.addBook("Good Girl, Bad Blood", "Holly Jackson");
lib.addBook("Atmoic habbit", "james clear");

console.log(lib.listBooks());

lib.addBook("To Kill a Mockingbird", "Harper Lee");
lib.addBook("1984", "George Orwell");

console.log(lib.listBooks());

lib.removeBook("1984");

console.log(lib.listBooks());

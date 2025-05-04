function createBook(title, author) {
  return {
    title: title,
    author: author,
    printInfo: function () {
      console.log("Book: " + this.title + ", Author: " + this.author);
    },
  };
}

const book = createBook("1984", "George Orwell");
book.printInfo();

// Arrow function dose not includes the context of this keyword, in return it acts different with object so we change it into normal function.

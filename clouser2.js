function createCounter() {
  let counter = 0;

  return {
    incrementCounter: function () {
      counter++;

      return counter;
    },
  };
}

let runIt = createCounter();

console.log(runIt.incrementCounter());

console.log(runIt.incrementCounter());
console.log(runIt.incrementCounter());

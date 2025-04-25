function createFunctionList() {
  let functions = [];

  for (var i = 0; i < 5; i++) {
    functions.push(
        indexing: function () {
      console.log("Index:", i);
    });
  }

  return functions;
}

console.log(createFunctionList());

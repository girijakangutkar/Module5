function createFunctionList() {
  let functions = [];

  for (var i = 0; i < 5; i++) {
    functions.push({
      indexing: function () {
        console.log("Index:", i);
      },
    });
  }

  return functions;
}

const functionList = createFunctionList();

functionList[0].indexing();

functionList[1].indexing();

functionList[2].indexing();

functionList[3].indexing();

functionList[4].indexing();

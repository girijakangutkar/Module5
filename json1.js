let student = {
  name: "Alice",
  age: 22,
  course: "Computer Science",
};

function JsObjToJSON(data) {
  let convert = JSON.stringify(data);

  return convert;
}

console.log(JsObjToJSON(student));

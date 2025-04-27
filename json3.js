let details = { name: "Alice", hobbies: ["reading", "traveling"] };

function deepCopy(data) {
  let ItsDeep = JSON.stringify(data);

  return ItsDeep;
}

console.log(details);

console.log(deepCopy(details));

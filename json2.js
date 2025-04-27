function multiplyNumbers(num1, num2) {
  let multiply = num1 * num2;

  return multiply;
}

let num1 = 5;
let num2 = 8;

let product = multiplyNumbers.apply(null, [num1, num2]);

console.log(product);

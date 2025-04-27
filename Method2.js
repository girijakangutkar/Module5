let arr = [2, 4, 7, 6, 12, 76, 45, 37];

function filterEvenNumbers(arr) {
  let evenFilter = arr.filter((ele) => {
    return ele % 2 == 0;
  });

  return evenFilter;
}

console.log(filterEvenNumbers(arr));

function sumOfArray(arr) {
  let initial = 0;
  let sum = arr.reduce((acc, curr) => acc + curr, initial);

  return sum;
}

console.log(sumOfArray(arr));

function sortAndConcat(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  return arr1.concat(arr2);
}

let arr2 = [2, 6, 7, 23, 16, 85];

console.log(sortAndConcat(arr, arr2));

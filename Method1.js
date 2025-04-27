let arr = [15, 30, 45, 60, 75, 90];

function extractAndReverse() {
  let thirdToFive = arr.slice(3, 6);

  return thirdToFive.reverse();
}

console.log(extractAndReverse(arr));

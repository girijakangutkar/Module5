let products = [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys",
  "apple",
  "apple",
  "apple",
  "apple",
  "bananna",
];

function occurrenceOfProducts(data) {
  let freq = data.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;

    return acc;
  }, {});

  let entries = Object.entries(freq);

  let finalResult = entries.sort((a, b) => a[1] - b[1]);

  return finalResult;
}

console.log(occurrenceOfProducts(products));

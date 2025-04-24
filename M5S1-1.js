const people = [
  {
    name: "Alice",
    address: { city: "New York", street: { name: "Broadway", number: 123 } },
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 },
    },
  },
];

let [
  {
    name,
    address: {
      city,
      street: { name: streetName, number },
    },
  },

  {
    name: name2,
    address: {
      city: city2,
      street: { name: streetName2, number: number2 },
    },
  },
] = people;

console.log(
  `${name} lives in New York on Broadway, ${name2} lives in Los Angeles on Sunset Boulevard`
);

/*
Example Output:

["Alice lives in New York on Broadway", "Bob lives in Los Angeles on Sunset Boulevard"]

*/

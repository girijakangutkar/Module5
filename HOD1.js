let productList = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
];

let list = productList
  .map(({ name, price }) => ({ [name]: price }))
  .forEach((price) => {
    for (let key in price) {
      price[key] < 50
        ? console.log(`${price[key]} is below 50`)
        : console.log(`${price[key]} is above 50`);
    }
  });

return list;

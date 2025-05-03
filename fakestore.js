async function products() {
  try {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    // console.log(data);
    let productPrice = data.reduce((acc, curr) => acc + curr.price, 0);
    console.log(productPrice);
    // return productPrice;
  } catch (err) {
    console.log("err occurred :", err);
  }
}

products();

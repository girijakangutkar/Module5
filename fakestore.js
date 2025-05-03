async function products() {
  try {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    // console.log(data);
    //* calculating the total price
    let productPrice = data.reduce((acc, curr) => acc + curr.price, 0);
    console.log(Math.floor(productPrice));

    //* filtering by category "electronics"
    let filterProduct = data.filter((pro) => pro.category == "electronics");
    console.log(filterProduct);

    //* Sorting the products by price smaller to higher with only name to return
    let sortProducts = data
      .sort((a, b) => a.price - b.price)
      .map((name) => name.title);
    console.log(sortProducts);
    // return productPrice;
  } catch (err) {
    console.log("err occurred :", err);
  }
}

products();

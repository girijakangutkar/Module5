function CreateInventoryItem(name, category, price) {
  this.name = name;
  this.category = category;
  this.price = price;
  this.describeItems = function () {
    console.log(
      `Item: ${this.name}, Category: ${this.category}, Price: ${this.category}`
    );
  };
}

function addItemDiscount() {}

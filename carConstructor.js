function CreateCar(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.describeCar = function () {
    console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
  };
}

//! I am not a car person.
let car1 = new CreateCar("Redbull", "F1", "2025");

let car2 = new CreateCar("Ferrary", "F1", "2025");

let car3 = new CreateCar("Mercedes", "Truck", "2025");

car1.describeCar();

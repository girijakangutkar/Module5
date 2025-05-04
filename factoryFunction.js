function CreateEmployee(name, role, salary) {
  this.name = name;
  this.role = role;
  this.salary = salary;
  this.introduce = function () {
    console.log(`Hello, I am ${this.name}, working as a ${this.role}`);
  };
}

let employee1 = new CreateEmployee("Girija", "Web developer", 50000);
let employee2 = new CreateEmployee("Gru", "Manager", 40000);
let employee3 = new CreateEmployee("Kevin", "Sales", 34000);
// console.log(employee1);
employee1.introduce();
employee2.introduce();
employee3.introduce();

function manageStudents() {
  let students = [
    "Alice",
    "Bob",
    "Charlie",
    "girija",
    "gauri",
    "sharli",
    "sharvari",
  ];

  students.splice(1, 0, "Sajari");

  console.log(students.includes("Eshwari"));

  console.log(students.join(", "));
}

manageStudents();

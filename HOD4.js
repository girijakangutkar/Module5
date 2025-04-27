let employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },

  { name: "Bob", tasksCompleted: 4, rating: 4.0 },

  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },

  { name: "David", tasksCompleted: 10, rating: 4.9 },

  { name: "Eve", tasksCompleted: 7, rating: 2.8 },
];

function performanceEvaluationByEmployee(data) {
  let findEmployee = data
    .filter(({ tasksCompleted }) => {
      return tasksCompleted > 5;
    })
    .map(({ name, tasksCompleted, rating }) =>
      rating > 4.5
        ? "Excellent"
        : rating > 3 && rating <= 4.5
        ? "Good"
        : "Needs Improvement"
    );

  return findEmployee;
}

console.log(performanceEvaluationByEmployee(employees));

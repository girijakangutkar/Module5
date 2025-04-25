function outerFunction() {
  let message = "Girija";

  function innerFunction() {
    console.log(message);
  }
  return innerFunction;
}

outerFunction()();

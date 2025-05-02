let intervalId = setInterval(() => {
  console.log("Loading...");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval cleared after 5 seconds");
}, 5000);

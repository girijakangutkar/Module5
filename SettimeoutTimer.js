// function timer(duration) {
//   let count = 0;
//   setTimeout(function () {
//     if (count < duration) {
//       console.log(`Timer is ${count}!`);
//     }
//     count++;
//   }, duration);
// }

// timer(4000);

function timer(duration, onComplete) {
  let count = 0;
  if (count < duration) {
    console.log("count is :", count);
  }
  count++;
  onComplete(duration);
  setTimeout(() => {}, duration);
}

function onComplete(duration) {
  console.log("Times out!", duration);
}

timer(4000, onComplete);

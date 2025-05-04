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
  setTimeout(() => {
    onComplete(duration);
  }, duration);
}

function onComplete(duration) {
  console.log("Times out! of", duration, "ms");
}

timer(6000, onComplete);

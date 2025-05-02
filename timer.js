function timer(duration, onComplete) {
  setTimeout(() => {
    onComplete(duration);
  }, duration);
}

function onComplete(duration) {
  console.log(`Timer of ${duration} finished`);
}

timer(5000, onComplete);

function msg1() {
  console.log("Message 1");
}

function msg2() {
  setTimeout(() => {
    console.log("Message 2");
  }, 2000);
}

function msg3() {
  console.log("Message 3");
}

msg1();
msg2();
msg3();

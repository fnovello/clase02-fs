function ejecuto1(callback) {
  console.log('callback: ', callback);
  setTimeout(() => {
    console.log("me ejecuto 1");
    callback(ejecuto3);
  }, 1500);
}

function ejecuto2(callback) {
  console.log("me ejecuto 2");
  callback();
}

function ejecuto3() {
  console.log("me ejecuto 3");
}

ejecuto1(ejecuto2);
// ejecuto3();
function ejecuto1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("me ejecuto 1");
    //   reject("CHE HUBO UN ERROR");
      resolve("me ejecuto 1");
    }, 1500);
  });
}

function ejecuto2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          // console.log("me ejecuto 1");
        //   reject("CHE HUBO UN ERROR");
          resolve("me ejecuto 2");
        }, 2000);
      });
}

iniciar(); 
async function iniciar(){
    const resp = await ejecuto1();
    const resp2 = await ejecuto2();
    console.log('resp: ', resp);
    console.log('resp: ', resp2);
}


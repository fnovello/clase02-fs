function ejecuto1() {
  return new Promise((resolve,reject) => {
      
      setTimeout(() => {
        // console.log("me ejecuto 1");
        reject("CHE HUBO UN ERROR");
        resolve("me ejecuto 1");
      }, 1500);
  })  
}

function ejecuto2() {
  console.log("me ejecuto 2");
}

ejecuto1().then((data) => {
    console.log('data: ', data);
    ejecuto2(); 
}).catch( (err) => console.log(err))




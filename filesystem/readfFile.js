const fs = require('fs');

console.log("direcotrio " + __dirname);

// fs.readFile(__dirname + "/data.txt",{encoding: 'utf-8'},(err,data) => {
//     if(err)console.log(err);
//     console.log('data: ', data);
// })


fs.writeFile(__dirname + "/data2.txt","voy asdasdasdasdsadas archivo",()=> {
    console.log("TERMINE DE ESCIBIR ARCHIVO");
})
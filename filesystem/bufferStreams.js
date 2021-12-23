const fs = require('fs');


const readStream = fs.createReadStream(__dirname + '/data.txt', {encoding:'utf8'});
const writeStream = fs.createWriteStream(__dirname + '/data3.txt');

let p = 0 ;
readStream.on("data", (parte) =>{
    var part =  "\n" + parte + "--PARTE-- N " + p++ +  "\n";
    writeStream.write(part);
    console.log(part);
})
const fs = require('fs');

fs.writeFile("message.txt","hello there node", (err) => {
if(err) throw (err);
console.log('file is written');
}) // this is asynchronous

console.log("hey there")

fs.readFile('./message.txt','utf8', (err,data) =>{
     if(err) throw err;
     console.log(data);
})
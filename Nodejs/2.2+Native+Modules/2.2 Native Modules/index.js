const fs = require('fs')

fs.writeFile('test.txt', 'hello', (err)=>{
    console.log(err);    
})

fs.readFile('message.txt', 'utf8',(err, data)=>{
    // console.log(err);
    console.log(data);
    
})
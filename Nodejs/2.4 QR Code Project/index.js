/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import { image } from "qr-image";
import { createWriteStream, writeFile } from "fs";

inquirer
  .prompt([
    {
        type: "input",
        name: "answer",
        message: "What is the url?"
    }
  ])
  .then((answers) => {
    console.log(answers);
    var code = image(answers.answer, { type: 'png' });
    code.pipe(createWriteStream('my_qr.png'))
    writeFile('userurl.txt', answers.answer, (err)=>{
        if(err) console.log(err);
        
    })
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
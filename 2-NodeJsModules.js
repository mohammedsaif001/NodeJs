const fs = require("fs"); //FS -> File System

let text = fs.readFileSync("2-inputText.txt","utf-8");  //Reading an Ip file
console.log("The content of the file: ");
console.log(text);

//Writing into a new File
text  = text.replace("Input","Output");
fs.writeFileSync("2-outputText,txt",text);

console.log("\nOutput File is: ");
console.log(text);

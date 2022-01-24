// Synchronous/Blocking (Line By LIne)
// Asynchronous/NonBlocking (Callbacks will fire )

const fs = require("fs"); //FS -> File System

fs.readFile("2-inputText.txt","utf-8",(err,data)=>{   //Asynchronous
    console.log(data);
});
console.log("THis is a last message");
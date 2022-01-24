//npm install express
const express = require("express");
const app = express();
port = 80;
app.get("/",(req,res)=>{
    res.send("HomePage");
});

app.get("/about",(req,res)=>{
    res.send("AboutPage");
});

//Post Method
app.post("/contact",(req,res)=>{
    res.send("ContactPage");
});

//Status Send
app.post("/this",(req,res)=>{
    res.status(404).send("404 Page Not Found");
});

app.listen(port,()=>{
    console.log('The Application startes successfully '+port);
});


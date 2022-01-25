//npm install express
const express = require("express");
const path = require('path');
const app = express();
port = 80;

// Serving Static Files
app.use('/static',express.static('static'));

//Set the template engine as pug
app.set('view engine','pug');

//Set the Views Directory
app.set('views',path.join(__dirname,'views'));

//Our Pug Demo Endpoint
app.get('/demo',(req, res) => {
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there! This is in Pug' })
  });

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


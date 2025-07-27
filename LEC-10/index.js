const express = require("express");
const app=express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"));
// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/index.html");
// })
// app.get("/about",(req,res)=>{
//     res.sendFile(__dirname+"/about.html");
// })
// app.post("/adduser",(req,res)=>{
//      const username = req.body.username;
//     const password = req.body.password;

//     // You can now store, verify, or log the data
//     console.log("Username:", username);
//     console.log("Password:", password);

//     res.send(`Welcome, ${username}!`);
// })
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
const sum=require("tanik-lec3");
const express= require("express");
const app =express();

app.get('/',(req,res)=>{
    res.send(
        `Sum is ${sum(5,10)}`
    );        
})
app.listen(3000,(req,res)=>{
    console.log("server started in 3000");
    
})

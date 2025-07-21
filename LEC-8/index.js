const express = require("express");

const app = express()

app.get('/', (req, res) => {
// //   res.send('Hello World')
//   res.send("<h1>helloooooooooo</h1>")
//   res.sendFile(__dirname+"/index.html")
// res.json({
//     name:"tANI",
//     age:"19"
// })
res.end("hello bitch"); 
})
// app.get("/watch",(req,res)=>{
//     let videoid=req.query.v;
//     let nId= req.query.n;

//  res.send("id gotit"+" "+ videoid+" "+nId)
// })

app.get("/watch/:v5/:n",(req,res)=>{
    let id=req.params.v;
    let nid=req.params.n;
    res.send("got it"+ id+" " +nid)

})
app.listen(5000,function(){
    console.log("server started")
})
const express= require("express");
const app=express();
const fs= require("fs");
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello again");
})
app.post("/data",(req,res)=>{
    
   let all=[];
 let name= req.body.name;
 let message=req.body.message;
 const newentry = { name, message }
  fs.readFile("userdata.json", "utf8", (err, data) => {
    if(err) return res.json({
        error:err
    })
    if(data && data.length>0){
        all=JSON.parse(data);
    }
    scroll.push(user);
    fs.writeFile("userdata.json", JSON.stringify(all, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: "Error writing to file" });
            }

            res.json({
                message: "Data saved successfully",
                data: newEntry
            });
        });

})
    // all.push(newentry)
    
    //     
    //         fs.appendFile("data.txt",JSON.stringify(all),function(err){
    //     if(err) return console.log(err);
    //     // res.send("data written");
    //     res.json({
    //           name:name,
    //           message:message
    //     })
    // })    
    

})
app.listen(5000,()=>{
    console.log("server created");
})

 //   fs.writeFile("data.txt",JSON.stringify(newentry),function(err){
    //     if(err) return console.log(err);
    //     // res.send("data written");
    //     res.json({
    //           name:name,
    //           message:message
    //     })
    // })
const fs= require("fs");
let data= process.argv.join(" ");
fs.writeFile("../demo.txt",data,function(err){
    if(err) return console.log(err);
 
})

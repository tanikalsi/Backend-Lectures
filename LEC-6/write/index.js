const fs= require("fs");

fs.writeFile("../demo.txt","Hellooooo",function(err, data){
    if(err) return console.log(err);
    console.log(data);
})


fs.writeFile("../demo2.txt","yo yo honey singh",function(err, data){
    if(err) return console.log(err);
    console.log(data);
})
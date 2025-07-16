const fs= require("fs");
//callback hell
fs.readFile("../demo.txt","utf-8",function(err,data1){
    if(err) return console.log(err);
    fs.readFile("../demo2.txt","utf-8",function(err,data2){
    if(err) return console.log(err);
    const combinedData= (data1+data2).replace(/\s+/g, "");
    fs.writeFile("../task.txt",combinedData,function(err,combineData){
        if(err) return console.log(err);
        console.log(combinedData);
    })
})
})

//console.log(process.argv); terminal ke arguments
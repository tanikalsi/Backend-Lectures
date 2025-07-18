const fs=require("fs");
let user=[
    {
        name:"Srishti",
        age:"19",
        address:"Patiala"
    },
        {
        name:"Smriti",
        age:"25",
        address:"HP"
    },
]
//SON.stringify(users) likhne ka format hai
// fs.writeFile("../user.txt",JSON.stringify(user),function(err){
//     if(err) return console.log(err);
//     console.log("users written");
    
// })
fs.readFile("../users.txt","utf-8",function(err,data1){
    if(err) return console.log(err);
    let users=JSON.parse(data1);
    fs.readFile("../user.txt","utf-8",function(err,data2){
        if(err) return console.log(err);
        let user=JSON.parse(data2);
        let combinedata=users.concat(user);
        fs.writeFile("../result.txt",JSON.stringify(combinedata),function(err){
            if(err) return console.log(err);
            console.log(combinedata);
        })
    })
})

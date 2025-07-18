const fs= require("fs");
let users=[
    {
        name:"Tani",
        age:"19",
        address:"Patiala"
    },
        {
        name:"Preeti",
        age:"25",
        address:"Canada"
    },
]
//SON.stringify(users) likhne ka format hai
fs.writeFile("../users.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err);
    console.log("users written");
})

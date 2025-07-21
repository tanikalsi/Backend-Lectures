const fs=require("fs");
let input=process.argv.slice(2);
let arr=[];
console.log("Welcome to the to do List");
console.log("User Inputs:",input);
for(let i=0;i<input.length;i+=3){
    let tasks={
        topic:input[i],
        task1:input[i+1],
        task2:input[i+2]
    }
    arr.push(tasks);
}
fs.readFile("../List.txt","utf-8",function(err,data){
    let prevtasks=[];
    if(!err && data)  
    prevtasks= JSON.parse(data);
    prevtasks.push(...arr);
fs.writeFile("../List.txt",JSON.stringify(prevtasks),function(err){
    if(err) return console.log(err);
    console.log("Stored successfully");
})

})


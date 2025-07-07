const fs = require("fs")
// process.env.UV_THREADPOOL_SIZE=10 threadpool increase krne ke liye 
console.log("start");
setTimeout(()=>{
    console.log("timer callback")
},0)
setImmediate(()=>{
    console.log("set Immediate callback")
})
function dosometask(){
    return new Promise((resolve,reject)=>{
        resolve("promise chlega")
    })
}
fs.readFile("demo.txt",(data)=>{
    console.log("poll phase callback");
    setTimeout(()=>{
        console.log("timer 2");
    },0)
    setImmediate(()=>{
    console.log("imme2");
})
})
console.log("end")
dosometask().then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err)
})
process.nextTick(()=>{
    console.log("nextTick")
})
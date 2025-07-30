// function changeColor() {
//   const box = document.getElementById("colorBox");

//   const colors = ["lightblue", "lightgreen", "lightcoral", "lightpink", "lightyellow", "lavender"];
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];

//   box.style.backgroundColor = randomColor;
// }

let box = document.querySelector(".box");
let generateBtn = document.querySelector(".btn");
let stop = document.querySelector(".stop");
let colors = ["red", "blue", "orange", "purple", "pink", "grey", "olive", "lightgreen"];
let intervalId=null;
function randomcolor() {
  let index = Math.floor(Math.random() * colors.length);  // safer!
  return colors[index];
}

generateBtn.addEventListener("click", function () {
//   let color = randomcolor();
//   box.style.backgroundColor = color;
intervalId=setInterval(() => {
  let color = randomcolor();
  box.style.backgroundColor = color;
}, 500);
});
stop.addEventListener("click",function(){
    if(intervalId){
        clearInterval(intervalId);
    }
})
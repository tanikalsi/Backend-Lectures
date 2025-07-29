// let el1= document.getElementById("heading");
// console.log(el1);
// let el2= document.getElementsByClassName("item");
// console.log(el2[0]);
// let el3= document.getElementsByTagName("p");
// console.log(el3[0]);
// let el4=document.querySelector("p");
// let el5=document.querySelector(".item");
// let el6=document.querySelectorAll(".item");
// console.log(el6);4
// let ul=document.querySelector("#container");

// let data= el4.innerText;
// console.log(data);
// el4.innerText="changed the data";
// let data2=ul.innerHTML;
// let data3=ul.textContent;
// console.log(data);
// console.log(data3);

// ul.innerHTML=`        <li class="item">item1</li>
//                 <li class="item">item2</li>
//                         <li class="item">item3</li>`;

// console.log(el5.getAttribute("class"));
// el5.setAttribute("id","js")

// console.dir(el5.getAttribute("id"));
// el5.classList.add("delete")
// el5.classList.remove("delete")
// console.log(el5.classList.contains("delete"));
let signupbtn=document.querySelector(".signup")
let form =document.querySelector("form");
signupbtn.addEventListener("click",function(){
    form.classList.toggle("hide");
})
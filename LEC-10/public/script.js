// script.js
document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h1");
    if (heading) {
        heading.style.color = "blue";
        heading.addEventListener("click", () => {
            alert("You clicked the heading!");
        });
    }
});

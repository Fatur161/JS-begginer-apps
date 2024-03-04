const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F", "E"];
const body = document.querySelector("body");
const colorSpan = document.querySelector("span");

document.addEventListener("DOMContentLoaded", function(){
    ChangeBgColor();
})

const ChangeBgColor = function () {
    let color = "#";
    for(let i = 0; i < 6; i++) color += data[randomNum()];
    color == "#000000" ? body.style.color = "#FFFFFF" : body.style.color = "#000000"
    colorSpan.innerText = color;
    body.style.backgroundColor = color;
};

function randomNum(){
    return Math.floor(Math.random() * 16);
}

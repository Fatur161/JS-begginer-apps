const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F", "E"];
const body = $("body");
const colorSpan = $("span");
const btn = $("button");

const ChangeBgColor = function () {
  let color = "#";
  for (let i = 0; i < 6; i++) color += data[randomNum()];
  color == "#000000"
    ? body.css("color", "#FFFFFF")
    : body.css("color", "#000000");
  colorSpan.text(color);
  body.css("background-color", color);
};

$(document).ready(ChangeBgColor());
ChangeBgColor();

btn.click(ChangeBgColor());

function randomNum() {
  return Math.floor(Math.random() * 16);
}

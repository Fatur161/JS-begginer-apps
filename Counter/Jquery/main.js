const numberText = $("span");
const decrBtn = $("#decrBtn");
const incrBtn = $("#incrBtn");
let number = 0;

numberText.text(0);
if (localStorage.getItem("num")) {
  number = localStorage.getItem("num");
  numberText.text(number);
} else {
  numberText.text(0);
}

function increment() {
  number++;
  numberText.text(number);
  localStorage.setItem("num", number);
}

function decrement() {
  number--;
  numberText.text(number);
  localStorage.setItem("num", number);
}

decrBtn.on("click", decrement);
incrBtn.on("click", increment);

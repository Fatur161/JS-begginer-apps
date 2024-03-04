const numberText = document.querySelector("span");
let number = 0;

numberText.innerText = 0;
if (localStorage.getItem("num")) {
  number = localStorage.getItem("num");
  numberText.innerText = number;
} else {
  numberText.innerText = 0;
}

function increment() {
  number++;
  numberText.innerText = number;
  localStorage.setItem("num", number);
}

function decrement() {
  number--;
  numberText.innerText = number;
  localStorage.setItem("num", number);
}

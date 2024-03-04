const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const mins = document.querySelector(".minutes");
const sec = document.querySelector(".seconds");

let timerId = null;

function getNewYearDate() {
  const now = new Date();
  const newYear = now.getFullYear() + 1;
  const newYearDate = new Date(newYear, 0, 1);
  return newYearDate;
}

function countDownTimer() {
  const deadline = getNewYearDate();
  const nowDate = new Date();
  const difference = deadline - nowDate;
  if (difference < 0) {
    clearInterval(timerId);
  }
  const daysNum =
    difference > 0 ? Math.floor(difference / 1000 / 60 / 60 / 24) : 0;
  const hoursNum =
    difference > 0 ? Math.floor(difference / 1000 / 60 / 60) % 24 : 0;
  const minutesNum =
    difference > 0 ? Math.floor(difference / 1000 / 60) % 60 : 0;
  const secondsNum = difference > 0 ? Math.floor(difference / 1000) % 60 : 0;

  days.textContent = daysNum < 10 ? "0" + daysNum + ":" : daysNum + ":";
  hours.textContent = hoursNum < 10 ? "0" + hoursNum + ":" : hoursNum + ":";
  mins.textContent =
    minutesNum < 10 ? "0" + minutesNum + ":" : minutesNum + ":";
  sec.textContent = secondsNum < 10 ? "0" + secondsNum : secondsNum;
}

document.addEventListener("DOMContentLoaded", function () {
  countDownTimer();
  timerId = setInterval(countDownTimer, 1000);
});

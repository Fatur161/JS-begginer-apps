$(document).ready(function () {
  const days = $(".days");
  const hours = $(".hours");
  const mins = $(".minutes");
  const sec = $(".seconds");

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

    days.text(daysNum < 10 ? "0" + daysNum + ":" : daysNum + ":");
    hours.text(hoursNum < 10 ? "0" + hoursNum + ":" : hoursNum + ":");
    mins.text(minutesNum < 10 ? "0" + minutesNum + ":" : minutesNum + ":");
    sec.text(secondsNum < 10 ? "0" + secondsNum : secondsNum);
  }

  countDownTimer();
  timerId = setInterval(countDownTimer, 1000);
});

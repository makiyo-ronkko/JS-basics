// Task1

const seconds = document.getElementById('seconds');
let totalSeconds = 0;
setInterval(setTime, 120);

function setTime() {
  ++totalSeconds;
  seconds.innerHTML = totalSeconds;
  if (totalSeconds === 101) {
    totalSeconds = 0;
    seconds.innerHTML = totalSeconds;
  }
}

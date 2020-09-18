function move() {
  const circle = document.getElementById('circle');
  let pos = circle.offsetLeft;
  const max = setInterval(toRight, 10);
  function toRight() {
    if (pos == 300) {
      clearInterval(max);
    } else {
      pos++;
      circle.style.left = pos + 'px';
    }
  }
}

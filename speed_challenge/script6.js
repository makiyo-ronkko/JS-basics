const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');

function checkHeight() {
  let height1 = div1.style.height;
  height1 = 200;
  div2.style.height = height1;
  console.log(div2.style.height);
}

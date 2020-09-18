// Task2

let arr = [];

arr[0] = new Image();
arr[0].src = 'runner/runner1.png';

arr[1] = new Image();
arr[1].src = 'runner/runner2.png';

arr[2] = new Image();
arr[2].src = 'runner/runner3.png';

arr[3] = new Image();
arr[3].src = 'runner/runner4.png';

let i = 0;

function run() {
  document.getElementById('runner').src = arr[i].src;
  i++;
  if (i == arr.length) {
    i = 0;
  }
  setTimeout(function () {
    run();
  }, 60);
}

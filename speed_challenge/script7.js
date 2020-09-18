const popup = document.getElementById('popup');
const span = document.getElementsByClassName('close')[0];

span.onclick = function () {
  popup.style.display = 'none';
  console.log(':)');
};

function alertMessage() {
  popup.style.display = 'block';
}

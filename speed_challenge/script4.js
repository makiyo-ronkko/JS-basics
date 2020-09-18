const popup = document.getElementById('popup');
const span = document.getElementsByClassName('close')[0];

window.onscroll = function () {
  this.openPopup();
};
span.onclick = function () {
  popup.style.display = 'none';
};

function openPopup() {
  if (
    document.body.scrollTop > 201 ||
    document.documentElement.scrollTop > 201
  ) {
    popup.style.display = 'block';
  }
  if (
    document.body.scrollTop < 200 ||
    document.documentElement.scrollTop < 200
  ) {
    // popup.style.display = 'none';
  }
}

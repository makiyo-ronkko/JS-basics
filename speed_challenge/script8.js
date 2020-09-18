// function transformE() {
//   const insertedText = document.getElementById('input').value;
//   document.getElementById('text').innerHTML =
//     'Here is your text: ' + insertedText;
// }

function transformO() {
  const insertedText = document.getElementById('input').value;
  document.getElementById('text').innerHTML = insertedText;
  var res = insertedText.replace(/e/g, 'o');
  document.getElementById('text').innerHTML = 'Here is your text: ' + res;
  console.log(res);
}

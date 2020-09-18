function textAlert(e) {
  if (e.keyCode === 13) alert('You hit the enter key!');
  else if (e.keyCode !== 13) {
    console.log('Try another key!');
  }
}

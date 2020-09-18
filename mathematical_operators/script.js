function gasCalc() {
  const cost = document.getElementById('cost').value;
  const money = document.getElementById('money').value;
  const litre = (money / cost).toFixed(2);

  if (!isNaN(litre)) {
    document.getElementById('result').innerText = `${litre}`;
  }
}

function speedCalc() {
  const distance = document.getElementById('distance').value;
  const time = document.getElementById('time').value;
  const average = (distance / time).toFixed(2);

  if (!isNaN(average)) {
    document.getElementById('result2').innerText = `${average}`;
  }
}

function inchCalc() {
  const inch = document.getElementById('inch').value;
  const centimeter = (inch * 2.54).toFixed(2);

  if (!isNaN(centimeter)) {
    document.getElementById(
      'result3'
    ).innerText = `${inch} inches is ${centimeter} cm`;
  }
}

function bmiCalc() {
  const mass = document.getElementById('mass').value;
  const height = document.getElementById('height').value;
  const bmi = (mass / (height * height)).toFixed(2);

  if (!isNaN(bmi)) {
    document.getElementById('result4').innerText = `${bmi}`;
  }
}

{
  /* <script>
      const form = document.querySelector("form");
      form.addEventListener("submit", (e) => {
        const x = e.target.price.value;
        const y = e.target.money.value;

        const answer = y / x;

        e.target.price.value = "";
        e.target.money.value = "";

        document.getElementById("answer-section").style.display = "block";
        document.getElementById("answer").innerHTML = answer.toFixed(2);
        event.preventDefault();
      });
    </script> */
}

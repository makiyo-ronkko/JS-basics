function ageCalc() {
  const age = document.getElementById('age').value;

  if (age < 18) {
    document.getElementById(
      'result'
    ).innerText = `You're still ${age}! Too young!`;
  } else if (age < 27) {
    document.getElementById(
      'result'
    ).innerText = `${age} is the right age for military service`;
  } else if (age < 41) {
    document.getElementById('result').innerText = `You are in reserve`;
  } else if (age < 55) {
    document.getElementById('result').innerText = `You are in backup reserve`;
  } else {
    document.getElementById('result').innerText = `${age} is too aged!`;
  }
}

// task 2
function numCalc() {
  let sum = 0;
  let nums = [];
  const num1 = parseInt(document.getElementById('num1').value);
  const num2 = parseInt(document.getElementById('num2').value);
  const num3 = parseInt(document.getElementById('num3').value);

  if (num1 > 0 && num2 > 0 && num3 > 0) {
    nums.push(num1, num2, num3);
    console.log(nums);
    const value = nums.reduce((sum, currentVal) => {
      return sum * currentVal;
    });
    console.log(value);
  } else if (num1 < 0 && num2 < 0 && num3 < 0) {
    nums.push(num1, num2, num3);
    console.log('Only negative numbers entered');
  } else {
    sum += num1 + num2 + num3;
    console.log(sum);
  }
}

// task 3

function checkCalc() {
  const num = parseInt(document.getElementById('num').value);

  if (num > 0 && !(num % 2)) {
    document.getElementById(
      'result3'
    ).innerText = `Your number is ${num}. Positive and even!`;
  } else if (num > 0 && num % 2) {
    document.getElementById(
      'result3'
    ).innerText = `Your number is ${num}. Positive and odd!`;
  } else if (num < 0 && !(num % 2)) {
    document.getElementById(
      'result3'
    ).innerText = `Your number is ${num}. Negative and even!`;
  } else {
    document.getElementById(
      'result3'
    ).innerText = `Your number is ${num}. Negative and odd!`;
  }
}

// task 4
function salaryCalc() {
  const salary = parseInt(document.getElementById('salary').value);
  const hour = parseInt(document.getElementById('hour').value);

  let yourSalary = 0;
  let dailySalary = salary * hour;
  let extra2Hours = salary * 1.5 * (hour - 7);
  let additionalHours = salary * 2 * (hour - 9);

  if (hour < 8) {
    yourSalary = dailySalary;
  } else if (hour < 10) {
    yourSalary = dailySalary + extra2Hours;
  } else {
    yourSalary = dailySalary + extra2Hours + additionalHours;
    // not correct
  }

  document.getElementById(
    'result4'
  ).innerText = `Your daily salary is ${yourSalary} euros`;
}

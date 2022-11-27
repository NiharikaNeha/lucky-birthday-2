import "./styles.css";

var dob = document.querySelector("#dob");
var num = document.querySelector("#num");
var btn = document.querySelector("#btn");
var output = document.querySelector("#output");

function btnHandler() {
  if (dob.value === "") {
    output.innerText = "Please enter valid date of birth";
  } else if (num.value === "") {
    output.innerText = "Please enter valid lucky number";
  } else {
    output.innerText = "";
    var sum = calculateSum();
    checkLuckyBirthday(sum, num.value);
  }
}

function calculateSum() {
  var dateOfBirth = dob.value.replaceAll("-", "");
  var sumOfDigits = 0;
  for (var i = 0; i < dateOfBirth.length; i++) {
    sumOfDigits += Number(dateOfBirth[i]);
  }
  return sumOfDigits;
}

function checkLuckyBirthday(sum, num) {
  if (sum % num === 0) {
    output.innerText = "Your birthday is lucky!!";
  } else {
    output.innerText = "Your birthday is not lucky!!";
  }
}

btn.addEventListener("click", btnHandler);

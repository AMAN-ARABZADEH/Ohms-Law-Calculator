"use strict";
// Author: Aman Arabzadeh
// Date: 2023-02-16
// I built this calculator for my course in embedded systems at University.

const btn = document.getElementById("btn");
const resetBtn = document.getElementById("reset");
const result = document.getElementById("result");
const resultsheading = document.getElementById("results");

function styleResult() {
  result.style.borderBottom = "1px solid black";
  result.style.width = "200px";
  resultsheading.innerHTML = "Result";
  result.style.color = "black";
}

function negativeValueChecker(voltage, current, resistance) {
  if (voltage <= 0 || current <= 0 || resistance <= 0) {
    return false;
  }
  return true;
}

btn.addEventListener("click", function () {
  const voltage = parseFloat(document.getElementById("voltage").value);
  const current = parseFloat(document.getElementById("current").value);
  const resistance = parseFloat(document.getElementById("resistance").value);

  if (!isNaN(voltage) && !isNaN(current) && isNaN(resistance)) {
    if (!negativeValueChecker(voltage, current, resistance)) {
      result.innerHTML = "The input values has to be greater then zero!";
      result.style.color = "red";
      result.style.borderBottom = "1px solid red";
    } else {
      const res = voltage / current;
      result.innerHTML = "Resistance: " + res.toFixed(6) + " Ω";
      styleResult();
    }
  } else if (!isNaN(voltage) && isNaN(current) && !isNaN(resistance)) {
    if (!negativeValueChecker(voltage, current, resistance)) {
      result.innerHTML = "The input values has to be greater then zero!";
      result.style.color = "red";
      result.style.borderBottom = "1px solid red";
    } else {
      const curr = voltage / resistance;
      result.innerHTML = "Current: " + curr.toFixed(6) + " A";
      styleResult();
    }
  } else if (isNaN(voltage) && !isNaN(current) && !isNaN(resistance)) {
    if (!negativeValueChecker(voltage, current, resistance)) {
      result.innerHTML = "The input values has to be greater then zero!";
      result.style.color = "red";
      result.style.borderBottom = "1px solid red";
    } else {
      const volt = current * resistance;
      result.innerHTML = "Voltage: " + volt.toFixed(6) + " V";
      styleResult();
    }
  } else {
    result.innerHTML = "Please enter two values to calculate.";
    result.style.color = "red";
    result.style.borderBottom = "1px solid red";
  }
});

resetBtn.addEventListener("click", function () {
  document.getElementById("voltage").value = "";
  document.getElementById("current").value = "";
  document.getElementById("resistance").value = "";
  result.innerHTML = "";
  resultsheading.innerHTML = "";
});

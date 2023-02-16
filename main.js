"use strict";
// Author: Aman Arabzadeh
// Date: 2023-02-16
// I built this calculator for my course in embedded systems at University.

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");
  const resetBtn = document.getElementById("reset");
  const result = document.getElementById("result");
  const resultsheading = document.getElementById("results");

  // Listen button
  btn.addEventListener("click", function () {
    // Get the user inputs value
    const voltage = document.querySelector("#voltage").value;
    const current = document.querySelector("#current").value;
    const resistance = document.querySelector("#resistance").value;

    // Convert the input units to standard units
    const voltageUnits = document.querySelector("#voltage-units").value;
    const currentUnits = document.querySelector("#current-units").value;
    const resistanceUnits = document.querySelector("#resistance-units").value;

    // Take the input value unit check which option is true
    let voltageInV, voltValue;
    if (voltageUnits === "voltage") {
      voltValue = voltageUnits;
      voltageInV = parseFloat(voltage);
    } else if (voltageUnits === "kilovolts") {
      voltageInV = parseFloat(voltage) * 1000;
    } else if (voltageUnits === "megavolts") {
      voltageInV = parseFloat(voltage) * 1000000;
    }
    let currentInA;

    if (currentUnits === "amps") {
      currentInA = parseFloat(current);
    } else if (currentUnits === "kiloamps") {
      currentInA = parseFloat(current) * 1000;
    } else if (currentUnits === "megaamps") {
      currentInA = parseFloat(current) * 1000000;
    }

    let resistanceInOhms;
    if (resistanceUnits === "ohms") {
      resistanceInOhms = parseFloat(resistance);
    } else if (resistanceUnits === "kiloohms") {
      resistanceInOhms = parseFloat(resistance) * 1000;
      console.log(resistanceInOhms.value);
    } else if (resistanceUnits === "megaohms") {
      resistanceInOhms = parseFloat(resistance) * 1000000;
    }

    if (!isNaN(voltageInV) && !isNaN(currentInA) && isNaN(resistanceInOhms)) {
      if (!negativeValueChecker(voltageInV, currentInA, resistanceInOhms)) {
        result.innerHTML = "The input values have to be greater than zero!";
        result.style.color = "red";
      } else {
        const res = voltageInV / currentInA;
        result.innerHTML =
          "Resistance: " + res.toFixed(6) + " " + resistanceUnits;
        styleResult();
      }
    } else if (
      !isNaN(voltageInV) &&
      isNaN(currentInA) &&
      !isNaN(resistanceInOhms)
    ) {
      if (!negativeValueChecker(voltageInV, currentInA, resistanceInOhms)) {
        result.innerHTML = "The input values have to be greater than zero!";
        result.style.color = "red";
      } else {
        const curr = voltageInV / resistanceInOhms;
        result.innerHTML = "Current: " + curr.toFixed(6) + " " + currentUnits;
        styleResult();
      }
    } else if (
      isNaN(voltageInV) &&
      !isNaN(currentInA) &&
      !isNaN(resistanceInOhms)
    ) {
      if (!negativeValueChecker(voltageInV, currentInA, resistanceInOhms)) {
        result.innerHTML = "The input values have to be greater than zero!";
        result.style.color = "red";
      } else {
        const volt = currentInA * resistanceInOhms;
        result.innerHTML = "Voltage: " + volt.toFixed(6) + " " + voltageUnits;
        styleResult();
      }
    } else {
      result.innerHTML = "Please enter two values to calculate.";
      result.style.color = "red";
    }
  });

  resetBtn.addEventListener("click", function () {
    document.getElementById("voltage").value = "";
    document.getElementById("current").value = "";
    document.getElementById("resistance").value = "";
    result.innerHTML = "";
    resultsheading.innerHTML = "";
  });

  function styleResult() {
    result.style.width = "200px";
    resultsheading.innerHTML = "Result";
    result.style.color = "black";
  }

  // Check for negative inputs
  function negativeValueChecker(voltage, current, resistance) {
    if (voltage <= 0 || current <= 0 || resistance <= 0) {
      return false;
    }
    return true;
  }

  const voltageUnitsSelect = document.getElementById("voltage-units");
  voltageUnitsSelect.addEventListener("change", calculate);

  const currentUnitsSelect = document.getElementById("current-units");
  currentUnitsSelect.addEventListener("change", calculate);

  const resistanceUnitsSelect = document.getElementById("resistance-units");
  resistanceUnitsSelect.addEventListener("change", calculate);
});

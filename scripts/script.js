"use strict";

let display = "";

function add(a) {
  // Convert display to an array
  display = display.split("");
  // Push the new value (a) to the array
  display.push(a);
  // Convert the array back to a string
  display = display.join("");
  // Update the result element with the new display value
  document.getElementById("result").innerText = display;
}

function calc() {
  // Regular expressions for checking math errors
  let regex1 = /\D$/;
  let result1 = regex1.test(display);
  let regex2 = /^\W/;
  let result2 = regex2.test(display);
  let regex3 = /\W{2,}/;
  let result3 = regex3.test(display);

  if (result1 || result2 || result3) {
    // Display "Math Error" if any of the regex conditions match
    document.getElementById("result").innerText = "Math Error";
  } else {
    // Evaluate the display string as a mathematical expression
    let splitValue = String(eval(display)).split(".");
    display = Number(eval(display));

    if (display === Infinity) {
      // Display "Math Error" if the result is infinity
      document.getElementById("result").innerText = "Math Error";
    } else {
      if (splitValue.length === 1) {
        // Convert display to a string and update the result element
        display = String(eval(display));
        document.getElementById("result").innerText = Number(display);
      } else {
        // Handle decimal values
        let onlyDecimalValue = String(display - Math.floor(display)).split("");
        onlyDecimalValue.shift();
        let onlyDecimalValueLen = onlyDecimalValue.length;

        if (onlyDecimalValueLen >= 16) {
          // Limit decimal places to 15 if the length is greater or equal to 16
          display = Number(display).toFixed(15);
          document.getElementById("result").innerHTML = Number(display);
        } else {
          // Update the result element with the display value
          document.getElementById("result").innerHTML = Number(display);
        }
      }
    }
  }
}

function remove() {
  // Convert display to an array
  display = display.split("");
  // Remove the last character from the array
  display.pop();
  // Convert the array back to a string
  display = display.join("");
  // Update the result element with the new display value
  document.getElementById("result").innerText = display;
}

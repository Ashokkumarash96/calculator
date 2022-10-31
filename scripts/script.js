"use strict";
// 'use strict'

let display = "";

function add(a) {
  display = display.split("");
  display.push(a);
  display = display.join("");
  document.getElementById("result").innerText = display;
}

function calc() {
  let regex1 = /\D$/;
  let result1 = regex1.test(display);
  let regex2 = /^\W/;
  let result2 = regex2.test(display);
  let regex3 = /\W{2,}/;
  let result3 = regex3.test(display);
  if (result1 || result2 || result3) {
    document.getElementById("result").innerText = "Math Error";
  } else {
    let splitValue = String(eval(display)).split(".");
    display = Number(eval(display));
    if (display === Infinity) {
      document.getElementById("result").innerText = "Math Error";
    } else {
      if (splitValue.length === 1) {
        display = String(eval(display));
        document.getElementById("result").innerText = Number(display);
      } else {
        let onlyDecimalValue = String(display - Math.floor(display)).split("");
        onlyDecimalValue.shift();
        let onlyDecimalValueLen = onlyDecimalValue.length;
        if (onlyDecimalValueLen >= 16) {
          display = Number(display).toFixed(15);
          document.getElementById("result").innerHTML = Number(display);
        } else {
          document.getElementById("result").innerHTML = Number(display);
        }
      }
    }
  }
}

function remove() {
  display = display.split("");
  display.pop();
  display = display.join("");
  document.getElementById("result").innerText = display;
}

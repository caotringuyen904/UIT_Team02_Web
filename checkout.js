"use strict";

const payAmountBtn = document.getElementById("payAmount");
const decrementBtn = document.querySelectorAll("#decrement");
const quantityElm = document.querySelectorAll("#quantity");
const incrementBtn = document.querySelectorAll("#increment");
const priceElm = document.querySelectorAll("#price");
const subtotalElm = document.querySelector("#subtotal");
const taxElm = document.querySelector("#tax");
const totalElm = document.querySelector("#total");

for (let i = 0; i < incrementBtn.length; i++) {
  incrementBtn[i].addEventListener("click", function () {
    let increment = Number(this.previousElementSibling.textContent);
    increment++;
    this.previousElementSibling.textContent = increment;
    totalCal();
  });

  decrementBtn[i].addEventListener("click", function () {
    let decrement = Number(this.nextElementSibling.textContent);
    decrement <= 1 ? 1 : decrement--;
    this.nextElementSibling.textContent = decrement;
    totalCal();
  });
}

const totalCal = function () {
  const tax = 0.1;
  let subtotal = 0;
  let totalTax = 0;
  let total = 0;

  for (let i = 0; i < quantityElm.length; i++) {
    subtotal +=
      Number(quantityElm[i].textContent) * Number(priceElm[i].textContent);
  }

  subtotalElm.textContent = subtotal.toFixed(3);
  totalTax = subtotal * tax;
  taxElm.textContent = totalTax.toFixed(3);
  total = subtotal + totalTax;
  totalElm.textContent = total.toFixed(3);
  payAmountBtn.textContent = total.toFixed(3);
};

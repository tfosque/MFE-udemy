import faker from "faker";

let cart = `<div>You have ${faker.random.number()} items in your cart </div>`;
console.log({ cart });
document.querySelector("#dev-cart-main").innerHTML = cart;
document
  .querySelector("#dev-cart-main")
  .insertAdjacentHTML("beforebegin", "<h3>Cart:</h3>");

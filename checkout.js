"use strict";

const paymentMethodBtns = document.querySelectorAll(".method");
const payAmountElm = document.getElementById("payAmount");
const payAmountBtn = document.getElementById("pay-button");
const subtotalElm = document.querySelector("#subtotal");
const taxElm = document.querySelector("#tax");
const totalElm = document.querySelector("#total");
let decrementBtn = null;
let incrementBtn = null;

let focusingMethod = null;
let productList = [
  {
    id: 1,
    inCart: 1,
    productImg: "./images/b-grill-beef-speacial.jpeg",
    productTitle: "Beef cheese",
    productPrice: 10,
    productDescription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    type: "BURGER",
  },
  {
    id: 2,
    inCart: 2,
    productImg: "./images/b-chicken-grill.jpg",
    productTitle: "Chicken grill hotcool",
    productPrice: 8,
    productDescription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    type: "BURGER",
  },
  {
    id: 3,
    inCart: 0,
    productImg: "./images/b-chicken.jpg",
    productTitle: "Chicken french fried",
    productPrice: 6,
    productDescription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    type: "BURGER",
  },
  {
    id: 4,
    inCart: 0,
    productImg: "./images/b-tuna_fish_double.jpg",
    productTitle: "Tuna fish delicous",
    productPrice: 9,
    productDescription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    type: "BURGER",
  },
  {
    id: 5,
    inCart: 0,
    productImg: "./images/f-chicken-boneless.png",
    productTitle: "Chicken boneless",
    productPrice: 12,
    productDescription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    type: "CHICKEN",
  },
  {
    id: 6,
    inCart: 0,
    productImg: "./images/f-chicken-1p.png",
    productTitle: "Chicken drum stick",
    productPrice: 10,
    productDescription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    type: "CHICKEN",
  },
  {
    id: 7,
    inCart: 0,
    productImg: "./images/f-chicken-finger-6p.png",
    productTitle: "Chicken finger",
    productPrice: 14,
    productDescription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    type: "CHICKEN",
  },
  {
    id: 8,
    inCart: 0,
    productImg: "./images/f-chicken-combo.png",
    productTitle: "Combo happy",
    productPrice: 14,
    productDescription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    type: "CHICKEN",
  },
  {
    id: 9,
    inCart: 0,
    productImg: "./images/c-cupcake-chocolate.jpg",
    productTitle: "Valentine",
    productPrice: 12,
    productDescription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    type: "CAKE",
  },
  {
    id: 10,
    inCart: 0,
    productImg: "./images/c-grape-bread.jpg",
    productTitle: "Break Talk",
    productDescription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    productPrice: 10,
    type: "CAKE",
  },
  {
    id: 11,
    inCart: 0,
    productImg: "./images/c-pasta.jpg",
    productTitle: "Pasta Roma",
    productPrice: 14,
    productDescription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    type: "CAKE",
  },
  {
    id: 12,
    inCart: 0,
    productImg: "./images/c-sandwich.jpg",
    productTitle: "Sanwich cheese egg",
    productPrice: 14,
    productDescription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    type: "CAKE",
  },
  {
    id: 13,
    inCart: 0,
    productImg: "./images/d-drink-fruirt.jpg",
    productTitle: "Fruirt fresh cool",
    productPrice: 12,
    productDescription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    type: "DESSERT",
  },
  {
    id: 14,
    inCart: 0,
    productImg: "./images/d-cream.jpg",
    productTitle: "Cream Orie",
    productPrice: 10,
    productDescription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    type: "DESSERT",
  },
  {
    id: 15,
    inCart: 0,
    productImg: "./images/d-coffee-crosssaint.jpg",
    productTitle: "CrosSaint TourLes",
    productPrice: 14,
    productDescription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    type: "DESSERT",
  },
  {
    id: 16,
    inCart: 0,
    productImg: "./images/d-chocolate.jpg",
    productTitle: "Chocolate Dickiese",
    productPrice: 14,
    productDescription:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    type: "DESSERT",
  },
];
const products = JSON.parse(localStorage.getItem("payment"));

const totalCal = () => {
  const tax = 0.1;
  let subtotal = 0;
  let totalTax = 0;
  let total = 0;
  let quantityElm = document.querySelectorAll("#quantity");
  let priceElm = document.querySelectorAll("#price");

  for (let i = 0; i < quantityElm.length; i++) {
    subtotal +=
      Number(quantityElm[i].textContent) * Number(priceElm[i].textContent);
  }

  subtotalElm.textContent = subtotal.toFixed(2);
  totalTax = subtotal * tax;
  taxElm.textContent = totalTax.toFixed(2);
  total = subtotal + totalTax + 1;
  totalElm.textContent = total.toFixed(2);
  payAmountElm.textContent = total.toFixed(2);
};

const addProductCardBtnEventHandlers = () => {
  incrementBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
      let invoker = e.currentTarget;
      let increment = Number(invoker.previousElementSibling.textContent);
      increment++;
      invoker.previousElementSibling.textContent = increment;
      totalCal();
    });
  });

  decrementBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
      let invoker = e.currentTarget;
      let decrement = Number(invoker.nextElementSibling.textContent);
      decrement <= 1 ? 1 : decrement--;
      invoker.nextElementSibling.textContent = decrement;
      totalCal();
    });
  });
};

const createFormForCredit = () => {
  const form = document.createElement("form");
  form.action = "#";
  form.id = "dynamic-form";

  // Cardholder Name
  const cardholderDiv = document.createElement("div");
  cardholderDiv.className = "cardholder-name";
  cardholderDiv.innerHTML = `
    <label for="cardholder-name" class="label-default">Cardholder name</label>
    <input type="text" name="cardholder-name" id="cardholder-name" class="input-default" />
  `;
  form.appendChild(cardholderDiv);

  // Card Number
  const cardNumberDiv = document.createElement("div");
  cardNumberDiv.className = "card-number";
  cardNumberDiv.innerHTML = `
    <label for="card-number" class="label-default">Card number</label>
    <input type="number" name="card-number" id="card-number" class="input-default"/>
  `;
  form.appendChild(cardNumberDiv);

  // Expiration Date and CVV
  const inputFlexDiv = document.createElement("div");
  inputFlexDiv.className = "input-flex";

  const expireDateDiv = document.createElement("div");
  expireDateDiv.className = "expire-date";
  expireDateDiv.innerHTML = `
    <label for="expire-date" class="label-default">Expiration date</label>
    <div class="input-flex">
      <input type="number" name="day" id="expire-date" placeholder="31" min="1" max="31" class="input-default" />
      /
      <input type="number" name="month" id="expire-date" placeholder="12" min="1" max="12" class="input-default" />
    </div>
  `;
  inputFlexDiv.appendChild(expireDateDiv);

  const cvvDiv = document.createElement("div");
  cvvDiv.className = "cvv";
  cvvDiv.innerHTML = `
    <label for="cvv" class="label-default">CVV</label>
    <input type="number" name="cvv" id="cvv" class="input-default" required/>
  `;
  inputFlexDiv.appendChild(cvvDiv);

  form.appendChild(inputFlexDiv);

  return form;
};

const createFormForDebit = () => {
  const form = document.createElement("form");
  form.action = "#";
  form.id = "dynamic-form";

  // Cardholder Name
  const cardholderDiv = document.createElement("div");
  cardholderDiv.className = "bank-name";
  cardholderDiv.innerHTML = `
    <label for="bank-name" class="label-default">Select bank</label>
    <input list="bank-names" name="bank-name" class="input-default">
    <datalist id="bank-names">
      <option value="VietcomBank">
      <option value="BIDV">
      <option value="VIB">
      <option value="ACB">
      <option value="Agribank">
    </datalist>
  `;
  form.appendChild(cardholderDiv);

  // Card Number
  const cardNumberDiv = document.createElement("div");
  cardNumberDiv.className = "card-number";
  cardNumberDiv.innerHTML = `
    <label for="card-number" class="label-default">Card number</label>
    <input type="number" name="card-number" id="card-number" class="input-default" />
  `;
  form.appendChild(cardNumberDiv);

  const ownerName = document.createElement("div");
  ownerName.className = "debit-name";
  ownerName.innerHTML = `
    <label for="debit-name" class="label-default">Name on card</label>
    <input type="text" name="debit-name" id="debit-name" class="input-default" />
  `;

  form.appendChild(ownerName);

  return form;
};

const createDummyQRCode = (momoOrZalo) => {
  // Create a new div element
  var containerDiv = document.createElement("div");
  containerDiv.id = "dynamic-form";
  containerDiv.style.margin = "auto";

  // Create an image element
  var imageElement = document.createElement("img");
  imageElement.src =
    momoOrZalo === "momo" ? "images\\momo_qr.jpg" : "images\\zalopay_qr.jpg"; // Set the path to your image
  imageElement.alt = "Description of the image";
  imageElement.width = 500;

  // Create a label element
  var labelElement = document.createElement("p");
  labelElement.textContent = "Scan this QR code with mobile app";

  // Append the image and label elements to the div
  containerDiv.appendChild(imageElement);
  containerDiv.appendChild(labelElement);
  return containerDiv;
};

const renderForm = (paymentMethodId) => {
  const formContainer = document.getElementById(paymentMethodId);
  let form = undefined;
  switch (paymentMethodId) {
    case "credit-card":
      form = createFormForCredit();
      break;
    case "debit-card":
      form = createFormForDebit();
      break;
    case "zalopay":
    case "momo":
      form = createDummyQRCode(paymentMethodId);
      break;
    case "paypal":
      window.open("https://www.paypal.com/signin?locale.x=vi_VN", "_blank");
    default:
      break;
  }

  if (form) {
    formContainer.appendChild(form);
  }
};

// Create a function to create product card dynamically
const createProductCard = (product) => {
  const productCardDiv = document.createElement("div");
  productCardDiv.className = "product-card";

  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const imgBoxDiv = document.createElement("div");
  imgBoxDiv.className = "img-box";
  const productImg = document.createElement("img");
  productImg.src = product.productImg;
  productImg.alt = "product image";
  productImg.width = 80;
  productImg.className = "product-img";
  imgBoxDiv.appendChild(productImg);

  const detailDiv = document.createElement("div");
  detailDiv.className = "detail";

  const productNameH4 = document.createElement("h4");
  productNameH4.className = "product-name";
  productNameH4.textContent = product.productTitle;

  const wrapperDiv = document.createElement("div");
  wrapperDiv.className = "wrapper";

  const productQtyDiv = document.createElement("div");
  productQtyDiv.className = "product-qty";

  const decrementButton = document.createElement("button");
  decrementButton.id = "decrement";
  decrementButton.innerHTML = '<ion-icon name="remove-outline"></ion-icon>';

  const quantitySpan = document.createElement("span");
  quantitySpan.id = "quantity";
  quantitySpan.textContent = product.inCart;

  const incrementButton = document.createElement("button");
  incrementButton.id = "increment";
  incrementButton.innerHTML = '<ion-icon name="add-outline"></ion-icon>';

  productQtyDiv.appendChild(decrementButton);
  productQtyDiv.appendChild(quantitySpan);
  productQtyDiv.appendChild(incrementButton);

  const priceDiv = document.createElement("div");
  priceDiv.className = "price";
  priceDiv.innerHTML = `$ <span id="price">${product.productPrice}</span>`;

  const closeBtn = document.createElement("button");
  closeBtn.className = "product-close-btn";
  closeBtn.innerHTML = '<ion-icon name="close-outline"></ion-icon>';

  wrapperDiv.appendChild(productQtyDiv);
  wrapperDiv.appendChild(priceDiv);
  wrapperDiv.appendChild(closeBtn);

  detailDiv.appendChild(productNameH4);
  detailDiv.appendChild(wrapperDiv);

  cardDiv.appendChild(imgBoxDiv);
  cardDiv.appendChild(detailDiv);

  productCardDiv.appendChild(cardDiv);

  return productCardDiv;
};

const renderProductCards = (productList) => {
  const productCart = document.querySelector(".cart-item-box");
  productList.forEach((product) =>
    productCart.appendChild(createProductCard(product))
  );
  decrementBtn = document.querySelectorAll("#decrement");
  incrementBtn = document.querySelectorAll("#increment");
  addProductCardBtnEventHandlers();
  totalCal();
};

//Function to remove the form
const removeForm = () => {
  const dynamicForm = document.getElementById("dynamic-form");
  if (dynamicForm) {
    dynamicForm.remove(); // Remove the form if it exists
  }
};

paymentMethodBtns.forEach((element) => {
  element.addEventListener("focus", (e) => {
    if (focusingMethod === e.currentTarget) return;
    else focusingMethod = e.currentTarget;

    console.log(element);
    let invoker = e.currentTarget;
    let currentSelected = document.querySelector(".selected");
    if (currentSelected) {
      currentSelected.classList.remove("selected");
      document.querySelector(".fill").remove();
      currentSelected.querySelector(".method-header").innerHTML += `
      <ion-icon
        class="checkmark "
        name="checkmark-circle-outline"
      ></ion-icon>
      `;
    }
    removeForm();
    invoker.querySelector(".checkmark").remove();
    invoker.classList.add("selected");
    invoker.querySelector(".method-header").innerHTML += `
      <ion-icon
        class="checkmark fill"
        name="checkmark-circle"
      ></ion-icon>
      `;
    renderForm(invoker.id);
  });
});

payAmountBtn.addEventListener("click", () => {
  if (focusingMethod) {
    alert(focusingMethod.id);
  } else {
    alert("Select payment method");
  }
});

renderProductCards(productList);

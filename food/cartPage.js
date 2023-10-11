let cartItemsArray = Object.values(JSON.parse(localStorage.getItem('productsInCart')) || []);

console.log(cartItemsArray);


let cartPromotionArray = JSON.parse(localStorage.getItem('promotion'));

if(cartPromotionArray==null)cartPromotionArray = []
console.log(cartPromotionArray);



// Alternatively, you can use the spread operator:
let combinedCartArray = [...cartItemsArray, ...cartPromotionArray];
console.log(combinedCartArray);

//RENDER BUILD CART

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
onLoadCartNumbers();

function displayCart() {
    let productContainer = document.querySelector('.products-container');
    let productTotal = document.querySelector('.product-total')
    let cartCost = localStorage.getItem('totalCost');

    let btnCheckout = document.querySelector('.checkOut');

    if (combinedCartArray.length > 0 && productContainer) {
        productContainer.innerHTML = `
        <div class="product-title">
            <span class="no">.No</span>
            <span class="col">Product</span>
            <span class="col">Price</span>
            <span class="col">Quantity</span>
            <span class="col">Total</span>
        </div>
      `;
        combinedCartArray.forEach((product, index) => {
            productContainer.innerHTML += `
        <div class="product">
            <span class="no">${index + 1}</span>
            <span class="col "> 
                <button class="btnRemove" onClick="removeProduct(${product.id})">X</button>
                <img width="50px" height="40px" text-align="center" src="${product.productImg}" >
                <h5>${product.productTitle}</h5>
            </span>
            <span class="col">${product.productPrice}.00$</span>
            <span class="col">
                <button class="btnQuantity" onClick="changeQuantity('${product.productTitle}', 'increase')">+</button>
                ${product.inCart}
                <button class="btnQuantity"  onClick="changeQuantity('${product.productTitle}', 'decrease')">-</button>
            </span>
            <span class="col">${product.inCart * product.productPrice}.00$</span>
        </div>
        `;
        })

        productTotal.innerHTML = `
      <div class="product-total">

         <span>Total cost: &nbsp&nbsp </span>
         <span> ${cartCost}.00$</span>
      </div> `;

      btnCheckout.innerHTML = `
        <button class="btn btn-primary custom-button" onclick="goToCheckout()">
                Go to checkout
        </button> `
                       
                
        

    }
}

displayCart();

function changeQuantity(itemName, operation) {

    const index = combinedCartArray.findIndex(item => item.productTitle === itemName);

    if (index !== -1) {
        if (operation === 'increase') {
            combinedCartArray[index].inCart += 1;
        } else if (operation === 'decrease') {
            if (combinedCartArray[index].inCart > 1) {
                combinedCartArray[index].inCart -= 1;
            } else {
                // If the quantity is 1 or less, remove the item from the cart
                combinedCartArray.splice(index, 1);
            }
        }

        localStorage.setItem('productsInCart', JSON.stringify(combinedCartArray));

        // Update cartNumbers in cartPage
        const cartNumbers = combinedCartArray.map(cartNum => cartNum.inCart);
        const sumCartNum = cartNumbers.reduce((acc, cur) => acc + cur, 0);
        localStorage.setItem('cartNumbers', sumCartNum);
        onLoadCartNumbers();

        // Update TotalCost
        const prices = combinedCartArray.map(price => price.inCart * price.productPrice);
        const sumPrice = prices.reduce((acc, cur) => acc + cur, 0);
        localStorage.setItem('totalCost', sumPrice);

        displayCart();
    } else {
        console.log('Item not found in the array');
    }
}

// remove product in cart

function removeProduct(itemId) {

    const index = combinedCartArray.findIndex(item => item.id === itemId);
    console.log(index);

    if (index !== -1) {
        combinedCartArray.splice(index, 1);

        console.log(combinedCartArray);

        console.log('Item removed from cart:', itemId);

        // Update the combinedCartArray in localStorage
        localStorage.setItem('productsInCart', JSON.stringify(combinedCartArray));
        console.log('Array in localStorage updated:', combinedCartArray);

        // Update TotalCost
        const prices = combinedCartArray.map(price => price.inCart * price.productPrice);
        const sumPrice = prices.reduce((acc, cur) => acc + cur, 0);

        console.log(sumPrice);

        localStorage.setItem('totalCost', sumPrice);

        console.log(sumPrice);

        // Update cartNumbers
        const cartNumbers = combinedCartArray.map(cartNum => cartNum.inCart);
        const sumCartNum = cartNumbers.reduce((acc, cur) => acc + cur, 0);
        localStorage.setItem('cartNumbers', sumCartNum);
        onLoadCartNumbers();

        // Remove product in cart
        displayCart();
    } else {
        console.log('Item not found in the array');
    }
}

// GO TO CHECKOUT PAGE
function goToCheckout() {
    // Update the combinedCartArray in localStorage
    localStorage.setItem('payment', JSON.stringify(combinedCartArray));


    // Redirect to the checkout page (you can replace 'checkout.html' with your actual checkout page URL)
    window.location.href = 'checkout.html';
}
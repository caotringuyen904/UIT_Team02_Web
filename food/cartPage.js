
//RENDER BUILD CART

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
onLoadCartNumbers();

function displayCart() {

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);

    let productContainer = document.querySelector('.products-container');
    let productTotal = document.querySelector('.product-total')
    let cartCost = localStorage.getItem('totalCost');


    // console.log(cartItems);
    // console.log(typeof cartItems);


    if (cartItems && productContainer) {
        productContainer.innerHTML = `
        <div class="product-title">
                    <span class="no">.No</span>
                    <span class="col">Product</span>
                    <span class="col">Price</span>
                    <span class="col">Quantity</span>
                    <span class="col">Total</span>
        </div>
      `;
        Object.values(cartItems).map((product, index) => {
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
        `
        })

        productTotal.innerHTML = `
      <div class="product-total">
             <span>Total cost: &nbsp&nbsp </span>
              <span> ${cartCost}.00$</span>
        </div> `;
        
    }
}

displayCart();

function changeQuantity(itemName, operation) {
    let cartItems = JSON.parse(localStorage.getItem('productsInCart')) || [];
    console.log(cartItems);

    let cartItemsArray = Object.values(cartItems);

    const index = cartItemsArray.findIndex(item => item.productTitle === itemName)
    console.log(index);


    if (index !== -1) {
        if (operation === 'increase') {
            cartItemsArray[index].inCart += 1;
        }
        else if (operation === 'decrease') {
            cartItemsArray[index].inCart -= 1;
        }

        if (cartItemsArray[index].inCart < 0) {
            cartItemsArray[index].inCart = 0;
        }

        console.log(cartItemsArray[index].inCart);
    }
    else {
        console.log('Item not found in the array');
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItemsArray));
    console.log('Array in localStorage updated:', cartItemsArray);

    console.log(cartItemsArray);
    for (let i in cartItemsArray) {
        if (cartItemsArray[i].productTitle === itemName) {
            cartItemsArray[i].inCart = cartItemsArray[index].inCart;
            console.log(cartItemsArray[i].inCart);
            break;
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItemsArray));
    // Update the cartItemsArray in localStorage

    //update cartNumbers in cartPage
    const cartNumbers = cartItemsArray.map(cartNum => cartNum.inCart);
    const sumCartNum = cartNumbers.reduce((acc, cur) => acc + cur, 0);
    localStorage.setItem('cartNumbers', sumCartNum);
    onLoadCartNumbers();


    //update TotalCost
    const prices = cartItemsArray.map(price => price.inCart * price.productPrice);
    const sumPrice = prices.reduce((acc, cur) => acc + cur, 0);

    console.log(sumPrice);

    localStorage.setItem('totalCost', sumPrice);

    console.log(sumPrice);
    //update TotalCost //

    displayCart();

}

// remove product in cart

function removeProduct(itemId) {

    let cartItems = JSON.parse(localStorage.getItem('productsInCart')) || [];
    console.log(cartItems);

    let cartItemsArray = Object.values(cartItems);

    const index = cartItemsArray.findIndex(item => item.id === itemId)
    console.log(index);

    if (index !== -1) {
        cartItemsArray.splice(index, 1);

        console.log(cartItemsArray);

        console.log('Item removed from cart:', itemId);
    }

    // Update the cartItemsArray in localStorage
    localStorage.setItem('productsInCart', JSON.stringify(cartItemsArray));
    console.log('Array in localStorage updated:', cartItemsArray);


    //update TotalCost
    const prices = cartItemsArray.map(price => price.inCart * price.productPrice);
    const sumPrice = prices.reduce((acc, cur) => acc + cur, 0);

    console.log(sumPrice);

    localStorage.setItem('totalCost', sumPrice);

    console.log(sumPrice);
    //update TotalCost //

    // update cartNumbers
    const cartNumbers = cartItemsArray.map(cartNum => cartNum.inCart);
    const sumCartNum = cartNumbers.reduce((acc, cur) => acc + cur, 0);
    localStorage.setItem('cartNumbers', sumCartNum);
    onLoadCartNumbers();
    // update cartNumbers

    // remove product in cart //

    displayCart();
}


// GO TO CHECKOUT PAGE
function goToCheckout() {
    let cartItemsArray = JSON.parse(localStorage.getItem('productsInCart')) || [];
    
    // Update the cartItemsArray in localStorage
    localStorage.setItem('productsInCart', JSON.stringify(cartItemsArray));
    
    // Redirect to the checkout page (you can replace 'checkout.html' with your actual checkout page URL)
    window.location.href = 'checkout.html';
}
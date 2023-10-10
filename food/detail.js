
let products = [
    {
        id: 1,
        inCart: 0,
        productImg: "./images/b-grill-beef-speacial.jpeg",
        productTitle: "Beef cheese",
        productPrice: 10,
        productDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        type: 'BURGER'
    },
    {
        id: 2,
        inCart: 0,
        productImg: "./images/b-chicken-grill.jpg",
        productTitle: "Chicken grill hotcool",
        productPrice: 8,
        productDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        type: "BURGER",
    },
    {
        id: 3,
        inCart: 0,
        productImg: "./images/b-chicken.jpg",
        productTitle: "Chicken french fried",
        productPrice: 6,
        productDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        type: "BURGER",
    },
    {
        id: 4,
        inCart: 0,
        productImg: "./images/b-tuna_fish_double.jpg",
        productTitle: "Tuna fish delicous",
        productPrice: 9,
        productDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        type: "BURGER",
    },
    {
        id: 5,
        inCart: 0,
        productImg: "./images/f-chicken-boneless.png",
        productTitle: "Chicken boneless",
        productPrice: 12,
        productDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        type: "CHICKEN",
    },
    {
        id: 6,
        inCart: 0,
        productImg: "./images/f-chicken-1p.png",
        productTitle: "Chicken drum stick",
        productPrice: 10,
        productDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        type: "CHICKEN",
    },
    {
        id: 7,
        inCart: 0,
        productImg: "./images/f-chicken-finger-6p.png",
        productTitle: "Chicken finger",
        productPrice: 14,
        productDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        type: "CHICKEN",
    },
    {
        id: 8,
        inCart: 0,
        productImg: "./images/f-chicken-combo.png",
        productTitle: "Combo happy",
        productPrice: 14,
        productDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        type: "CHICKEN",
    },
    {
        id: 9,
        inCart: 0,
        productImg: "./images/c-cupcake-chocolate.jpg",
        productTitle: "Valentine",
        productPrice: 12,
        productDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        type: "CAKE",
    },
    {
        id: 10,
        inCart: 0,
        productImg: "./images/c-grape-bread.jpg",
        productTitle: "Break Talk",
        productPrice: 10,
        productDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        type: "CAKE",
    },
    {
        id: 11,
        inCart: 0,
        productImg: "./images/c-pasta.jpg",
        productTitle: "Pasta Roma",
        productPrice: 14,
        productDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        type: "CAKE",
    },
    {
        id: 12,
        inCart: 0,
        productImg: "./images/c-sandwich.jpg",
        productTitle: "Sanwich cheese egg",
        productPrice: 14,
        productDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        type: "CAKE",
    },
    {
        id: 13,
        inCart: 0,
        productImg: "./images/d-drink-fruirt.jpg",
        productTitle: "Fruirt fresh cool",
        productPrice: 12,
        productDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        type: "DESSERT",
    },
    {
        id: 14,
        inCart: 0,
        productImg: "./images/d-cream.jpg",
        productTitle: "Cream Orie",
        productPrice: 10,
        productDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        type: "DESSERT",
    },
    {
        id: 15,
        inCart: 0,
        productImg: "./images/d-coffee-crosssaint.jpg",
        productTitle: "CrosSaint TourLes",
        productPrice: 14,
        productDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        type: "DESSERT",
    },
    {
        id: 16,
        inCart: 0,
        productImg: "./images/d-chocolate.jpg",
        productTitle: "Chocolate Dickiese",
        productPrice: 14,
        productDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        type: "DESSERT",
    },
]

// Retrieve the string from localStorage
const storedProductString = localStorage.getItem('productData');

console.log(storedProductString);

// Parse the string back to an object
const storedProduct = JSON.parse(storedProductString);

console.log(storedProduct);


// Get references to the DOM elements
const productNameElement = document.getElementById('product-name');
const productDescriptionElement = document.getElementById('product-description');
const productImageElement = document.getElementById('product-image');
const productPriceElement = document.getElementById('product-price');

// Update the DOM elements with the product details
productNameElement.innerText = storedProduct.productTitle;
productDescriptionElement.innerText = storedProduct.productDescription;
productImageElement.src = storedProduct.productImg;
productPriceElement.innerText = "Price: " + storedProduct.productPrice + ".00 $";


function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
onLoadCartNumbers();

// FUNCTION ADD TO CART
let carts = document.querySelectorAll('.add-cart');
console.log(carts);

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        alert('A product add to cart successfully')
    })
}



// DANG FIX METHOD ADD TO CART

// for (let i = 0; i < carts.length; i++) {
//     carts[i].addEventListener('click', () => {
//         cartNumbers(products[i]);
//         totalCost(products[i]);
//     })
// }

// // get cartNumbers on localStorage upload on UI cart-span
// function onLoadCartNumbers() {
//     let productNumbers = localStorage.getItem('cartNumbers');
//     if (productNumbers) {
//         document.querySelector('.cart span').textContent = productNumbers;
//     }
// }
// onLoadCartNumbers();

// //upload change value on local web
// function cartNumbers(product) {

//     let productNumbers = localStorage.getItem('cartNumbers');
//     productNumbers = parseInt(productNumbers);

//     if (productNumbers) {
//         localStorage.setItem('cartNumbers', productNumbers + 1);
//         document.querySelector('.cart span').textContent = productNumbers + 1;
//     }
//     else {
//         localStorage.setItem('cartNumbers', 1);
//         document.querySelector('.cart span').textContent = 1;
//     }
//     setItems(product);
//     alert('A product add to cart successfully')
// }

// // Set value after render


// function setItems(product) {
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);


//     if (cartItems != null) {
//       if (cartItems[product.productImg] == undefined) {
//         const nextIndex = Object.keys(cartItems).length;
//         cartItems[nextIndex] = product;
//         cartItems[nextIndex].inCart = 1;
//       } else {
//         cartItems[product.productImg].inCart += 1;
//       }
//     } else {
//       cartItems = {
//         0: product
//       };
//       cartItems[0].inCart = 1;
//     }

//     console.log(cartItems);

//     localStorage.setItem('productsInCart', JSON.stringify(cartItems));
//   }


// //total cost cart
// function totalCost(product) {
//     // console.log('The product price is', product.price);
//     let cartCost = localStorage.getItem('totalCost');

//     if (cartCost != null) {
//         cartCost = parseInt(cartCost);
//         localStorage.setItem('totalCost', cartCost +
//             product.productPrice);
//     } else {
//         localStorage.setItem('totalCost', product.productPrice);
//     }
// }






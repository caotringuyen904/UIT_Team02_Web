
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
        productImg: "./images/f-chicken-cbx.png",
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
        productDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        productPrice: 10,
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



//render UI all products
//Innitially display all products


// box-container
//             card
//                 imgCont
//                         image
//                 content
//                         title
//                         price
//                         button   

function renderProduct() {

    for (var i of products) {

        //create box
        let card = document.createElement("div");
        card.classList.add("box", i.type, "hide");
        //image div
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");
        //img tag
        let image = document.createElement("img");
        image.setAttribute("src", i.productImg);
        imgContainer.appendChild(image);

        card.appendChild(imgContainer);

        //content-container
        let content = document.createElement("div");
        content.classList.add("content-container");
        //productTitle
        let title = document.createElement("h3");
        title.classList.add("product-name");
        title.innerText = i.productTitle.toUpperCase();
        content.appendChild(title);
        //price
        let price = document.createElement("h4");
        price.innerText = i.productPrice + ".00$";
        content.appendChild(price);

        //Add to cart button
        let btn = document.createElement("div");
        btn.classList.add("add-cart");
        btn.innerHTML = "Add to cart"

        content.appendChild(btn);

        card.appendChild(content);

        document.getElementById("box-container").appendChild(card);
    }
}

renderProduct();


//FUNCTION CART PAGE
let carts = document.querySelectorAll('.add-cart');
console.log(carts);

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

// get cartNumbers on localStorage upload on UI cart-span
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
onLoadCartNumbers();

//upload change value on local web
function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');
    console.log(productNumbers);
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
    alert('A product add to cart successfully')
}

// Set value after render

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log("cartItems", cartItems);

    if (cartItems != null) {
        if (cartItems[product.productImg] == undefined) {
            cartItems = {
                ...cartItems,
                [product.productImg]: product
            }
        }
        cartItems[product.productImg].inCart += 1;
    }
    else {
        product.inCart = 1;
        cartItems = {
            [product.productImg]: product
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));

}

//total cost cart
function totalCost(product) {
    // console.log('The product price is', product.price);
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost +
            product.productPrice);
    } else {
        localStorage.setItem('totalCost', product.productPrice);
    }
}



//Test filter button one function
function handleFilterProduct(value) {

    let buttons = document.querySelectorAll(".btn")
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    })

    //select all cards
    let elements = document.querySelectorAll(".box");
    elements.forEach((element) => {
        if (value.toLowerCase() == 'all') {
            element.classList.remove("hide");
        }
        else {
            //check if element contains type class
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            }
            else {
                element.classList.add("hide");
            }
        }
    })
}


// render search button onClick
document.getElementById("search").addEventListener("click", () => {
    //initialization
    let searchInput = document.getElementById("search-input").value;

    let cards = document.querySelectorAll(".box");
    console.log(searchInput);
    console.log(cards);
    let elements = document.querySelectorAll(".product-name");

    //loop through all element
    elements.forEach((e, index) => {
        if (e.innerHTML.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        }
        else {
            cards[index].classList.add("hide");
        }
    })
})


window.onload = () => {
    handleFilterProduct('ALL');
}



const productImages = document.getElementsByClassName('image-container');

for (let i = 0; i < productImages.length; i++) {
    productImages[i].addEventListener('click', () => {
        setProductDetail(products[i]);
        window.location.href = "./detail.html";
    });
}

function setProductDetail(product) {

    console.log(product);

    // Convert the object to a string
    const productString = JSON.stringify(product);

    // Store the string in localStorage
    localStorage.setItem('productData', productString);

}




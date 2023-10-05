// Product list array to store added products
var productList = [];

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  var name = document.getElementById('name').value;
  var price = document.getElementById('price').value;
  var imageFile = document.getElementById('image').files[0];
  var type = document.getElementById('type').value;

  // Create a product object with the form values
  var product = {
    productName: name,
    productPrice: price,
    productImg: imageFile,
    type: type
  };


  // Add the product to the product list array
  productList.push(product);

  // Perform further processing with the product object
  console.log('New Product:', product);

  // Render the updated product list
  renderProductList();
  
  alert('Add new product successfully');

  // Clear the form inputs
  document.getElementById('name').value = '';
  document.getElementById('price').value = '';
  document.getElementById('image').value = '';
  document.getElementById('type').value = '';
}

function renderProductList() {
  var productListContainer = document.getElementById('productList');
  console.log(productList);

  productListContainer.innerHTML = ''; // Clear the container before rendering


  productListContainer.innerHTML += `
    <div class="product-title">
          <span class="no">.No</span>
          <span class="col">Image</span>
          <span class="col">Type</span>
          <span class="col">Name</span>
          <span class="col">Price</span>

    </div> `

    productList.map( (product, index) => {
    productListContainer.innerHTML += `
        <div class= "product">
        <span class="no">${index + 1}</span>
        <span class="col">     
            <img width="50px" height="40px" text-align="center" src="${URL.createObjectURL(product.productImg)}" >
        </span>

        <span class="col ">                                             
            <h5>${product.type}</h5>
        </span>

        <span class="col ">                                             
            <h5>${product.productName}</h5>
        </span>

        <span class="col">${product.productPrice}.00$</span>
        
    </div>
     `
  });
}


// Add event listener to the form
var form = document.getElementById('addProductForm');
form.addEventListener('submit', handleFormSubmit);
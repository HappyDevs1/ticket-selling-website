const sidebar = document.querySelector(".side-bar");
const hamburger = document.querySelector(".open-hamburger-icon");
const closeIcon = document.querySelector(".close-hamburger-icon");

hamburger.addEventListener("click", () => {
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
    hamburger.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
});

closeIcon.addEventListener("click", () => {
  sidebar.style.display = "none";
  hamburger.style.display = "block";
  closeIcon.style.display = "none";
});

//Modal
// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".getTicketBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Code for the cart
const decrementBtn = document.getElementById("decrement-btn");
const incrementBtn = document.getElementById("increment-btn");
let quantityDisplay = document.getElementById("cart-quantity");

let quantity = 1;

decrementBtn.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    quantityDisplay.innerHTML = `${quantity}`;
  }
});

incrementBtn.addEventListener("click", () => {
  quantity++;
  quantityDisplay.innerHTML = `${quantity}`;
});

const addToCartBtn = document.getElementById("add-to-cart-btn");
addToCartBtn.addEventListener("click", () => {
  console.log("Product added to cart with quantity:", quantity);
})
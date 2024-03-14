const sidebar = document.querySelector('.side-bar');
      const hamburger = document.querySelector('.open-hamburger-icon');
      const closeIcon = document.querySelector('.close-hamburger-icon');

      sidebar.style.display ="none";

      hamburger.addEventListener('click', () => {
        if (sidebar.style.display === 'none') {
          sidebar.style.display = 'block';
          hamburger.style.display = 'none';
          closeIcon.style.display = 'block';
        } else {
          sidebar.style.display = 'none';
          hamburger.style.display = "block";
          closeIcon.style.display = "none";
        }
      });

      closeIcon.addEventListener ('click', () => {
        sidebar.style.display ='none';
        hamburger.style.display = 'block';
        closeIcon.style.display = 'none';
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
const quantityDisplay = document.getElementById("cart-quantity");

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

let addToCartBtn = document.getElementById("add-to-cart-btn");

addToCartBtn.addEventListener("click", updatePrice);
addToCartBtn.addEventListener("click", updateTotal);
addToCartBtn.addEventListener("click", updateQuantity);

const price = document.getElementById("ticket-price");
const totalPrice = document.getElementById("checkout-price");
const totalQty = document.getElementById("checkout-qty");
const remove = document.getElementById("remove-all-items");

let ticketPrice = 30;
let result;

function updatePrice() {
  result = ticketPrice * quantity;
  price.innerHTML = `R${result}.00`;
};
function updateTotal() {
  totalPrice.innerHTML = `R${result}.00`;
};
function updateQuantity() {
  if (quantity === 1) {
    totalQty.innerHTML = `${quantity} item`;
  } else {
    totalQty.innerHTML = `${quantity} items`;
  }
};

function removeAll() {
  quantity = 1;
  result = 30;

  price.innerHTML = `R${result}.00`;
  totalPrice.innerHTML = `R${result}.00`;
  totalQty.innerHTML = `${quantity} item`;
  quantityDisplay.innerHTML = `${quantity}`;
}

remove.addEventListener("click", removeAll);

// import
import {
  getStorageItem,
  setStorageItem,
  deleteLocalStorage,
  formatPrice,
  getElement,
} from "../utils.js";
import { openCart, closeCart } from "../toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";
// set items

const cartItemCountMobileDOM = getElement(".cart-item-count-mobile");
const cartItemCountDesktopDOM = getElement(".cart-item-count-desktop");
const cartItemsDOM = getElement(".items-container");
const cartTotalDOM = getElement(".cart-total");

const cleanBtn = getElement("#clean-cart");
const checkoutBtn = getElement("#checkout");

let cart = getStorageItem("cart");

export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === parseInt(id));
  console.log(item);
  if (!item) {
    let product = findProduct(id);
    // add item to the the
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    // add item to the DOM;
    addToCartDOM(product);
  } else {
    // update values
    const amount = increaseAmount(id);
    const items = [...cartItemsDOM.querySelectorAll(".cart-item-amount")];
    const newAmount = items.find((value) => value.dataset.id === id);
    newAmount.textContent = `Qty: ${amount}`;
  }
  // add one to the item count
  displayCartItemCount();
  // display cart totals
  displayCartTotal();
  // set cart in local storage
  setStorageItem("cart", cart);
  //more stuff coming up
  openCart();
};

function displayCartItemCount() {
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);

  cartItemCountMobileDOM.textContent = amount;
  cartItemCountDesktopDOM.textContent = amount;
}

const displayCartTotal = () => {
  let total = cart.reduce((total, cartItem) => {
    return (total += cartItem.price * cartItem.amount);
  }, 0);
  cartTotalDOM.textContent = `Total : ${formatPrice(total)} `;
};

const displayCartItemsDOM = () => {
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem);
  });
};

const removeItem = (id) => {
  const newCart = cart.filter((cartItem) => {
    return cartItem.id !== id;
  });
  return newCart;
};

const increaseAmount = (id) => {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id == id) {
      newAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
};

const decreaseAmount = (id) => {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id == id) {
      newAmount = cartItem.amount - 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
};

const setupCartFunctionality = () => {
  cartItemsDOM.addEventListener("click", (e) => {
    const parent = e.target.parentElement;
    const parentID = e.target.parentElement.dataset.id;

    // increase amount
    if (parent.classList.contains("plus")) {
      const newAmount = increaseAmount(parentID);
      parent.parentElement.previousElementSibling.textContent = `Qty: ${newAmount}`;
    }

    // decrease amount
    if (parent.classList.contains("minus")) {
      const newAmount = decreaseAmount(parentID);
      if (newAmount === 0) {
        const newCart = removeItem(Number(parentID));
        cart = newCart;
        parent.parentElement.parentElement.parentElement.remove();
      } else {
        parent.parentElement.previousElementSibling.textContent = `Qty: ${newAmount}`;
      }
    }
    displayCartItemCount();
    displayCartTotal();
    setStorageItem("cart", cart);
  });
};

cleanBtn.addEventListener("click", (e) => {
  const itemsContainer = e.target.parentElement.previousElementSibling;
  itemsContainer.innerHTML = "";
  cartItemCountMobileDOM.textContent = 0;
  cartItemCountDesktopDOM.textContent = 0;
  deleteLocalStorage("cart");
  closeCart();
});

checkoutBtn.addEventListener("click", () => {
  alert("Thank's for buying from our store");
});

const init = () => {
  // display amount of cart items
  displayCartItemCount();
  // display total
  displayCartTotal();
  // add all cart items to the dom
  displayCartItemsDOM();
  // setup cart functionality
  setupCartFunctionality();
};

init();

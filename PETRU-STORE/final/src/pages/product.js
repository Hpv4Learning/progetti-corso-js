// global imports
import "../toggleNavbar.js";
import "../toggleCart.js";
import "../cart/setupCart.js";

// specific
import { addToCart } from "../cart/setupCart.js";
import { singleProductUrl, getElement, formatPrice } from "../utils.js";

// selections
const loading = getElement(".page-loading");
const centerDOM = getElement(".product-info");
const imgDOM = getElement(".product-img");
const titleDOM = getElement(".product-name");
const ratingDOM = getElement(".product-rating");
const priceDOM = getElement(".product-price");
const categoryDOM = getElement(".product-category");
const descDOM = getElement(".product-description");
const cartBtn = getElement(".add-cart-btn");
const disponivilityDOM = getElement(".product-disponibility");

// cart product
let productID;

// show product when page loads
window.addEventListener("DOMContentLoaded", async function () {
  const urlID = window.location.search;
  const id = urlID.slice(4);

  try {
    const response = await fetch(`${singleProductUrl}${id}`);
    if (response.status === 200) {
      const res = await response.json();
      // grab data
      const { id, title, rating, price, description, image, category } = res;
      productID = id;

      // set values
      document.title = `${title.toUpperCase()} | Petru Store`;
      imgDOM.src = image;
      titleDOM.textContent = title;
      disponivilityDOM.textContent = rating.count;
      priceDOM.textContent = formatPrice(price);
      descDOM.textContent = description;
      categoryDOM.textContent = category;

      for (let i = 0; i < Math.floor(rating.rate); i++) {
        ratingDOM.innerHTML += `
    <span class="iconify star" data-icon="fa6-solid:star"></span>
    `;
      }

      const halfStar = !!(rating.rate % 1);
      if (halfStar) {
        ratingDOM.innerHTML += `
    <span class="iconify star" data-icon="fa6-solid:star-half-stroke"></span>
    `;
      }
    } else {
      console.error(response.status, response.statusText);
      centerDOM.innerHTML += `
    <div>
    <h3 class="filter-error">sorry, something went wrong</h3>
    </div> 
     `;
    }
  } catch (error) {
    console.error(response.status);
  }
  loading.style.display = "none";
});

cartBtn.addEventListener("click", function () {
  addToCart(productID);
});

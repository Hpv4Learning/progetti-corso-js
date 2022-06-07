// global imports
import "../toggleNavbar.js";
import "../toggleCart.js";
import "../cart/setupCart.js";

//  filter imports
import setupSearch from "../filters/search.js";
import setupCategory from "../filters/category.js";
import setupPrice from "../filters/price.js";

// specific imports
import { addToCart } from "../cart/setupCart.js";
import { store } from "../store.js";
import display from "../displayProducts.js";
import { getElement, formatPrice } from "../utils.js";

const loading = getElement(".page-loading");
const imgDOM = getElement(".product-img");
const titleDOM = getElement(".product-name");
const ratingDOM = getElement(".product-rating");
const priceDOM = getElement(".product-price");
const categoryDOM = getElement(".product-category");
const descDOM = getElement(".product-description");
const cartBtn = getElement(".add-cart-btn");
const disponivilityDOM = getElement(".product-disponibility");

const firstProduct = store[0];

// cart product
let productID = firstProduct.id;

imgDOM.src = firstProduct.image;
titleDOM.textContent = firstProduct.title;
disponivilityDOM.textContent = firstProduct.rating.count;
priceDOM.textContent = formatPrice(firstProduct.price);
descDOM.textContent = firstProduct.description;
categoryDOM.textContent = firstProduct.category;

for (let i = 0; i < Math.floor(firstProduct.rating.rate); i++) {
  ratingDOM.innerHTML += `
    <span class="iconify star" data-icon="fa6-solid:star"></span>
    `;
}

const halfStar = !!(firstProduct.rating.rate % 1);
if (halfStar) {
  ratingDOM.innerHTML += `
    <span class="iconify star" data-icon="fa6-solid:star-half-stroke"></span>
    `;
}

cartBtn.addEventListener("click", function () {
  addToCart(productID);
});

display(store, getElement(".products-container"));

setupSearch(store);
setupCategory(store);
setupPrice(store);

loading.style.display = "none";

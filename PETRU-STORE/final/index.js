// global imports
import "./src/carousel.js";
import "./src/toggleNavbar.js";
import "./src/toggleCart.js";
import "./src/cart/setupCart.js";

import fetchProducts from "./src/fetchProducts.js";
import { setupStore } from "./src/store.js";

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    // add products to the store
    setupStore(products);
  }
};

window.addEventListener("DOMContentLoaded", init);

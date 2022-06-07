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

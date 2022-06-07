import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  try {
    const response = await fetch(allProductsUrl);
    const res = await response.json();
    return res;
  } catch (e) {
    console.error(e);
  }
};

export default fetchProducts;

import { getStorageItem, setStorageItem } from "./utils.js";

let store = getStorageItem("store");

const setupStore = (products) => {
  store = products.map((product) => {
    const { id, description, title, price, category, rating, image } = product;
    return { id, description, title, price, category, rating, image };
  });
  setStorageItem("store", store);
};

const findProduct = (id) => {
  let product = store.find((product) => {
    if (product.id === parseInt(id)) return product;
  });
  return product;
};

export { store, setupStore, findProduct };

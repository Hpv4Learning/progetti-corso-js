import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCategory = (store) => {
  let category = ["all", ...new Set(store.map((product) => product.category))];
  const categorySelect = getElement("#category");
  categorySelect.innerHTML = category
    .map((category) => {
      return `<option class="company-option">${category}</option>`;
    })
    .join("");
  categorySelect.addEventListener("change", function (e) {
    const element = e.target.value;

    let newStore = [];
    if (element === "all") {
      newStore = [...store];
    } else {
      newStore = store.filter((product) => {
        return product.category === element;
      });
    }
    display(newStore, getElement(".products-container"));
  });
};

export default setupCategory;

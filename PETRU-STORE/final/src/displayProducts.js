import { formatPrice, reduceString } from "./utils.js";
import { addToCart } from "./cart/setupCart.js";
const display = (products, element) => {
  // display products
  element.innerHTML = products
    .map((product) => {
      const { id, title, image, price, category, rating } = product;
      return ` 
      <article class="card">
          <a href="product.html?id=${id}">
            <img src="${image}" alt="${title}" class="card-img" />
          </a>
          <div class="card-info">
            <div class="card-category">${category}</div>
            <div class="card-quantity">${rating.count} pz</div>
            <div class="card-name">${reduceString(title, 40)}</div>
            <div></div>
            <div class="card-cta"><button data-id="${id}" class="product-cart-btn">Add to cart</button></div>
            <div class="card-price">${formatPrice(price)}</div>
          </div>
        </article>`;
    })
    .join("");

  element.addEventListener("click", function (e) {
    const el = e.target;
    if (el.classList.contains("product-cart-btn")) {
      addToCart(el.dataset.id);
    }
  });
};

export default display;

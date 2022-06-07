import { formatPrice, getElement, reduceString } from "../utils.js";
const cartItemsDOM = getElement(".items-container");

const addToCartDOM = ({ id, title, price, image, amount }) => {
  const article = document.createElement("article");
  article.classList.add("item");
  article.setAttribute("data-id", id);
  article.innerHTML = `
    <img src="${image}" src="./images/item.jpg" alt="item" />
                  <div class="info">
                    <h4>${reduceString(title, 20)}</h4>
                    <p class="cart-item-amount" data-id="${id}">Qty: ${amount}</p>
                    <div class="item-button-container">
                      <button class="plus" data-id="${id}">
                        <img src="./images/plus.svg" alt="plus" />
                      </button>
                      <button class="minus"data-id="${id}">
                        <img src="./images/minus.svg" alt="minus" />
                      </button>
                    </div>
                  </div>
                  <div class="price cart-item-price">${formatPrice(price)}</div>
            </div>
  `;
  cartItemsDOM.appendChild(article);
};

export default addToCartDOM;

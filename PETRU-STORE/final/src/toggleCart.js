import { getElement } from "./utils.js";

const modalBtnMobile = getElement(".toggle-cart-mobile.open-modal-btn");
const modalBtnDesktop = getElement(".toggle-cart-desktop.open-modal-btn");
const modal = getElement(".modal-container");
const closeBtn = getElement(".close-modal");
const overlay = getElement(".modal-overlay");
const html = getElement("html");

export const openCart = () => {
  overlay.classList.add("show-modal");
  modal.classList.add("show-modal");
  html.style.overflow = "hidden";
};

export const closeCart = () => {
  overlay.classList.remove("show-modal");
  modal.classList.remove("show-modal");
  html.style.overflow = "visible";
};

modalBtnMobile.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

modalBtnDesktop.addEventListener("click", () => openCart());

closeBtn.addEventListener("click", () => closeCart());

overlay.addEventListener("click", () => closeCart());

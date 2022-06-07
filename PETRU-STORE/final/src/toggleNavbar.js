import { getElement } from "./utils.js";

const navToggle = getElement(".nav-toggle");
const navLinks = getElement(".nav-links");

navToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show-links");
});

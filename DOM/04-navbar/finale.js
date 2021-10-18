//selezioniamo nodi dal DOM
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

//evento sul bottone navToggle che aggiunge/elimina la classe show-links
navToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show-links");
});

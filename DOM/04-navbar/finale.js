//selezioniamo nodi dal DOM
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

//evento sul bottone navToggle che aggiunge/elimina la classe show-links
navToggle.addEventListener("click", function () {
  // console.log(navLinks.classList);
  // console.log(navLinks.classList.contains("random"));
  // console.log(navLinks.classList.contains("nav-links"));
  // if (navLinks.classList.contains("show-links")) {
  //   navLinks.classList.remove("show-links");
  // } else {
  //   navLinks.classList.add("show-links");
  // }
  navLinks.classList.toggle("show-links");
});

//selezioniamo nodi dal DOM
const toggleBtn = document.querySelector(".sidebar-toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

//evento sul bottone navToggle che aggiunge/elimina la classe show-sidebar
toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

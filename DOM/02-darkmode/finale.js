// selezioniamo i nodi dal DOM
const title = document.getElementById("title");
console.log(title);
const btn = document.getElementById("btn");
console.log(btn);

// settiamo il contatore a 0
let count = 0;

// funzione che accede alle proprietà di stile dei nodi presi dal DOM e le modifica
function changeMod() {
  if (count === 0) {
    document.body.style.backgroundColor = "var(--background-color)";
    title.style.color = "var(--extra-dark-grey)";
    btn.style.backgroundColor = "var(--optional)";
    count++;
  } else {
    document.body.style.backgroundColor = "var(--extra-dark-grey)";
    title.style.color = "var(--background-color)";
    btn.style.backgroundColor = "var(--primary)";
    btn.style.color = "var(--tertiary)";
    count--;
  }
}

// aggiungiamo l'evento al bottone
btn.addEventListener("click", changeMod);

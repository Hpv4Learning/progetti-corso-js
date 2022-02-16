// array di oggetti. ogni oggetto rappresenta una ricetta
const recipes = [
  {
    nome: "cookies",
    difficulty: "Difficulty: 5/10",
    recipe:
      "Lorem ipsum dolor sit amet, cookies adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis cookies cookies ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in cookies velit esse cillum cookies eu fugiat nulla pariatur.",
    image:
      "https://res.cloudinary.com/starnuzzicloud/image/upload/v1633087644/Progetto%203%20Recipes/cookies_kotazf.jpg",
  },

  {
    nome: "pasta alla carbonara",
    difficulty: "Difficulty: 7/10",
    recipe:
      "Lorem pasta dolor sit amet, consectetur pasta elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud pasta ullamco laboris pasta ut aliquip ex ea commodo consequat. Duis aute irure dolor in pasta in voluptate velit esse cillum dolore eu fugiat pasta pariatur.",
    image:
      "https://res.cloudinary.com/starnuzzicloud/image/upload/v1633083884/Progetto%203%20Recipes/Spaghetti-alla-carbonara_jjjtsn.jpg",
  },

  {
    nome: "sushi",
    difficulty: "Difficulty: 4/10",
    recipe:
      "Lorem ipsum sushi sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sushi ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis sushi irure dolor in sushi in voluptate velit esse sushi dolore eu fugiat nulla pariatur.",
    image:
      "https://res.cloudinary.com/starnuzzicloud/image/upload/v1633084089/Progetto%203%20Recipes/sushi_rpyznz.jpg",
  },

  {
    nome: "pizza",
    difficulty: "Difficulty: 6/10",
    recipe:
      "Lorem ipsum pizza sit amet, consectetur adipiscing elit, sed do pizza tempor incididunt ut labore et dolore magna aliqua. Ut pizza ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis pizza irure dolor in pizza in voluptate velit esse pizza dolore eu fugiat nulla pariatur.",
    image:
      "https://res.cloudinary.com/starnuzzicloud/image/upload/v1633084319/Progetto%203%20Recipes/pizza_ympe3r.jpg",
  },

  {
    nome: "kebab",
    difficulty: "Difficulty: 3/10",
    recipe:
      "Lorem ipsum kebab sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut kebab ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis kebab irure dolor in kebab in voluptate velit esse kebab dolore eu fugiat nulla pariatur.",
    image:
      "https://res.cloudinary.com/starnuzzicloud/image/upload/v1633084546/Progetto%203%20Recipes/kebab_jp11z7.jpg",
  },
];

// selezioniamo i nodi dal DOM
const nome = document.getElementById("nome");
const diff = document.getElementById("difficulty");
const recipe = document.getElementById("recipe");
const img = document.getElementById("recipe-img");

const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".before-btn");
const randomButton = document.querySelector(".random-btn");

// settimo il primo item da mostrare
let currentItem = 0;

// carichiamo con DOMContentLoaded il primo item
window.addEventListener("DOMContentLoaded", showRecipe(currentItem));

// funzione che mostra la ricetta in base all'indice
function showRecipe(index) {
  const item = recipes[index];
  img.src = item.image;
  nome.textContent = item.nome;
  diff.textContent = item.difficulty;
  recipe.textContent = item.recipe;
}

// aggiungiamo la funzione showRecipe ai bottoni

// prevButton
prevButton.addEventListener("click", function () {
  currentItem--;
  console.log(currentItem);
  if (currentItem < 0) {
    currentItem = recipes.length - 1;
  }
  showRecipe(currentItem);
});

//nextButton
nextButton.addEventListener("click", function () {
  currentItem++;
  console.log(currentItem);
  if (currentItem > recipes.length - 1) {
    currentItem = 0;
  }
  showRecipe(currentItem);
});

//randomButton
randomButton.addEventListener("click", function () {
  console.log("hello");
  console.log(currentItem);
  currentItem = Math.floor(Math.random() * recipes.length);
  showRecipe(currentItem);
});

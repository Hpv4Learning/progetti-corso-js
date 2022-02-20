import fetchDrinks from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";

const presentDrink = async () => {
  const id = localStorage.getItem("drink");
  if (!id) {
    window.location.replace("index.html");
  } else {
    try {
      const drink = await fetchDrinks(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      displayDrink(drink);
    } catch (error) {
      console.log(error);
    }
  }
};

window.addEventListener("DOMContentLoaded", presentDrink);

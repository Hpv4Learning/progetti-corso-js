const btn = document.querySelector(".button-xs");
const text = document.querySelector(".text");
const img = document.querySelector(".container img");
const URL = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", async () => {
  try {
    const data = await fetch(URL);
    const response = await data.json();
    displayData(response);
  } catch (error) {
    console.log(error);
  }
});

function displayData({ value: joke }) {
  text.textContent = joke;
}

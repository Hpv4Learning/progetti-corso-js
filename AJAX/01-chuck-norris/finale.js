const btn = document.querySelector(".button-xs");
const text = document.querySelector(".text");
const img = document.querySelector(".container img");
const URL = "https://catfact.ninja/fact";

btn.addEventListener("click", async () => {
  try {
    const data = await fetch(URL);
    const response = await data.json();
    displayData(response.fact);
  } catch (error) {
    console.log(error);
  }
});

function displayData(value) {
  text.textContent = value;
}

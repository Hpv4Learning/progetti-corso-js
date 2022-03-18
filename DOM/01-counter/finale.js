//settiamo il counter a zero
let counter = 0;

// selezioniamo il contatore ed i bottoni
const count = document.getElementById("count");
console.log(count);
const buttons = document.querySelectorAll(".button-xs");
console.log(buttons);

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    // console.log(e.currentTarget.classList);
    const style = e.currentTarget.classList;
    if (style.contains("minus")) {
      counter--;
    } else if (style.contains("plus")) {
      counter++;
    } else {
      counter = 0;
    }

    if (counter > 0) {
      count.style.color = "lightgreen";
    } else if (counter < 0) {
      count.style.color = "red";
    } else {
      count.style.color = "white";
    }

    count.textContent = counter;
  });
});

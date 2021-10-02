const title = document.getElementById("title");
console.log(title);

const btn = document.getElementById("btn");
console.log(btn);

let count = 0;

function changeMod() {
  if (count === 0) {
    document.body.style.backgroundColor = "#fcfaff";
    title.style.color = "#343a40ff";
    btn.style.backgroundColor = "#6200ee";
    count++;
  } else {
    document.body.style.backgroundColor = "#343a40ff";
    title.style.color = "#fcfaff";
    btn.style.backgroundColor = "#7026ba";
    btn.style.color = "#f3dffb";
    count--;
  }
}

btn.addEventListener("click", changeMod);

//------------------FAQ------------------------------------------

const buttons = document.querySelectorAll(".question-btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;

    question.classList.toggle("show-text");
  });
});

// -----------------------MODAL----------------------------------

const modalBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("show-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});

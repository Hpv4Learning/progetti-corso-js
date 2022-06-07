import { getElement } from "./utils.js";
import { store } from "./store.js";

const backBtn = getElement("#carousel-button-prev");
const nextBtn = getElement("#carousel-button-next");
const carousel = getElement(".carousel");
const carouselActions = getElement(".carousel-actions");

const createSlides = (store) => {
  store.map((item) => {
    const slide = document.createElement("div");
    const img = document.createElement("img");
    slide.classList.add("carousel-item");
    img.src = item.image;
    slide.appendChild(img);
    carousel.insertBefore(slide, carouselActions);

    carousel.firstElementChild.classList.add("carousel-visible");
  });
};

createSlides(store);

let slidePosition = 0;
const slides = document.getElementsByClassName("carousel-item");
const totalSlides = slides.length;

backBtn.addEventListener("click", () => {
  moveToPrevSlide();
});

nextBtn.addEventListener("click", function () {
  moveToNextSlide();
});

const updateSlidePosition = () => {
  for (let slide of slides) {
    slide.classList.remove("carousel-visible");
    slide.classList.add("carousel-hidden");
  }

  slides[slidePosition].classList.add("carousel-visible");
};

const moveToNextSlide = () => {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
};

const moveToPrevSlide = () => {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
};

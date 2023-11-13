const previousBtn = document.querySelector("[data-previous]");
const nextBtn = document.querySelector("[data-next]");
const imgs = document.querySelectorAll("[data-slider]>img");
const circles = document.querySelectorAll("[data-circles]>div");
let currentSlide = 0;

function previous() {
  currentSlide = currentSlide > 0 ? (currentSlide = --currentSlide) : 2;
  updateSlide();
  updateDot();
}

function updateSlide() {
  imgs.forEach((el) => el.classList.remove("active"));
  imgs[currentSlide].classList.add("active");
}

previousBtn.addEventListener("click", previous);

function next() {
  currentSlide = currentSlide < 2 ? (currentSlide = ++currentSlide) : 0;
  updateSlide();
  updateDot();
}
nextBtn.addEventListener("click", next);

function updateDot() {
  circles.forEach((dot) => dot.classList.remove("dark"));
  circles[currentSlide].classList.add("dark");
}

circles.forEach((circle, i) => {
  circle.addEventListener("click", () => {
    currentSlide = i;
    updateDot();
    updateSlide();
  });
});

updateSlide();

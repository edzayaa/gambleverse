const carousel = document.querySelector(".carousel");

let isSlide = false,
  prevPageX,
  prevScrollLeft;

const slideStart = (e) => {
  isSlide = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const slideEnd = (e) => {
  isSlide = false;
};

const slide = (e) => {
  if (!isSlide) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

carousel.addEventListener("mousedown", slideStart);
carousel.addEventListener("mousemove", slide);
carousel.addEventListener("mouseup", slideEnd);

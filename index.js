"use strict";

const state = {
  slides: [
    {
      src:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/andromeda-galaxy-royalty-free-image-1585682435.jpg",
      description: "space #1",
    },
    {
      src:
        "https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg",
      description: "space #2",
    },
    {
      src: "https://blogs.esa.int/space19plus/files/2019/03/nebula.jpg",
      description: "space #3",
    },
    {
      src:
        "https://spacenews.com/wp-content/uploads/2018/05/24359364107_152b0152ff_k.jpg",
      description: "space #4",
    },
  ],
  _currentIndex: 0,
  get currentIndex() {
    return this._currentIndex;
  },
  set currentIndex(v) {
    this._currentIndex = v;
  },
  get currentSlide() {
    return this.slides[this.currentIndex];
  },
};

const [prevSlideBtn, nextSlideBtn] = document.querySelectorAll(
  "button.carouselBtn"
);
const slideImgElem = document.getElementById("slideImg");

prevSlideBtn.addEventListener("click", onPrevBtnClickHandler);
nextSlideBtn.addEventListener("click", onNextBtnClickHandler);

updateSlideImage();

/**
 *
 * @param {MouseEvent} mouseEvent
 */
function onPrevBtnClickHandler(mouseEvent) {
  updateSlideImage();
}

/**
 *
 * @param {MouseEvent} mouseEvent
 */
function onNextBtnClickHandler(mouseEvent) {
  updateSlideImage(true);
}

function updateSlideImage(isNextDirection = false) {
  const { slides, currentIndex } = state;
  debugger;
  state.currentIndex = isNextDirection
    ? (currentIndex + 1) % slides.length
    : (currentIndex - 1 + slides.length) % slides.length;

  const currentSlideObj = state.currentSlide;
  slideImgElem.setAttribute("src", currentSlideObj.src);
  slideImgElem.setAttribute("alt", currentSlideObj.description);
}

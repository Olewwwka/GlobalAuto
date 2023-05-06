const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderButtonLeft = document.querySelector('.slider-button-left');
const sliderButtonRight = document.querySelector('.slider-button-right');
let currentIndex = 0;

function moveSlider() {
  sliderWrapper.style.transform = `translateX(-${currentIndex * 100 / 5}%)`;
}

function moveLeft() {
  if (currentIndex === 0) {
    currentIndex = 4;
  } else {
    currentIndex--;
  }
  moveSlider();
}

function moveRight() {
  if (currentIndex === 4) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  moveSlider();
}

sliderButtonLeft.addEventListener('click', moveLeft);
sliderButtonRight.addEventListener('click', moveRight);

setInterval(() => {
  moveRight();
}, 5000);

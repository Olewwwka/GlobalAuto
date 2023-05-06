const smallImages = document.querySelectorAll(".car-small-image");
const bigImage = document.querySelector(".car-big-image");

// добавляем обработчик события на каждую маленькую картинку
smallImages.forEach((image) => {
  image.addEventListener("click", () => {
    // убираем класс active со всех маленьких картинок
    smallImages.forEach((image) => image.classList.remove("active"));
    // добавляем класс active на кликнутую картинку
    image.classList.add("active");
    // заменяем src большой картинки на src кликнутой маленькой картинки
    bigImage.src = image.src;
    bigImage.alt = image.alt;
  });
});

const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

// добавляем обработчик события на кнопки
prevButton.addEventListener("click", () => {
  const activeIndex = getActiveIndex();
  const prevIndex = (activeIndex === 0) ? smallImages.length - 1 : activeIndex - 1;
  activateSmallImage(prevIndex);
});

nextButton.addEventListener("click", () => {
  const activeIndex = getActiveIndex();
  const nextIndex = (activeIndex === smallImages.length - 1) ? 0 : activeIndex + 1;
  activateSmallImage(nextIndex);
});

// функция для получения индекса текущей активной маленькой картинки
function getActiveIndex() {
  let activeIndex;
  smallImages.forEach((image, index) => {
    if (image.classList.contains("active")) {
      activeIndex = index;
    }
  });
  return activeIndex;
}

// функция для активации заданной маленькой картинки
function activateSmallImage(index) {
  const activeImage = document.querySelector(".car-small-image.active");
  const newActiveImage = smallImages[index];
  if (activeImage !== newActiveImage) {
    activeImage.classList.remove("active");
    newActiveImage.classList.add("active");
    bigImage.src = newActiveImage.src;
    bigImage.alt = newActiveImage.alt;
  }
}
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const formMessage = document.querySelector('.form-message');
  formMessage.style.display = 'block';
});
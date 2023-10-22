function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgroundColorText = document.querySelector('.color');
const bodySelector = document.querySelector('body');
const buttonSelector = document.querySelector('.change-color');

buttonSelector.addEventListener('click', () => {
    const randomHexColor = getRandomHexColor();
    bodySelector.style.backgroundColor = randomHexColor;
    backgroundColorText.textContent = randomHexColor.toUpperCase();
});


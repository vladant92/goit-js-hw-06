function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const inputNumber = document.querySelector('input[type="number"]');

function createBoxes(amount) {
  const boxesDiv = document.getElementById('boxes');
  boxesDiv.innerHTML = '';

  if (amount <= 0 || amount > 100) {
    console.log('Please insert a value between 1 and 100.');
    return;
  }

  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';

    boxesDiv.appendChild(box);

    boxSize += 10;
  }
}

function destroyBoxes() {
  const boxesDiv = document.getElementById('boxes');
  boxesDiv.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const numOfBoxes = parseInt(inputNumber.value);
  createBoxes(numOfBoxes);
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});

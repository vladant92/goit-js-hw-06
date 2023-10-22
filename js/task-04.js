const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const counterValue = document.getElementById('value');

counterValue.innerHTML = '0';

decrementButton.addEventListener('click', () => {
    let currentValue = parseInt(counterValue.innerHTML, 10);
    currentValue -= 1;
    counterValue.innerHTML = currentValue.toString();
});

incrementButton.addEventListener('click', () => {
    let currentValue = parseInt(counterValue.innerHTML, 10);
    currentValue += 1;
    counterValue.innerHTML = currentValue.toString();
});
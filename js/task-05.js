const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (e) => {
    nameOutput.innerHTML = e.target.value;    
});

nameInput.addEventListener('blur', () => {
    if (nameInput.value.trim() === '') {
        nameOutput.innerHTML = 'Anonymous';
    }
});
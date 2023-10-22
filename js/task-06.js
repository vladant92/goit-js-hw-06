const validationInput = document.getElementById('validation-input');
const dataValue = parseInt(validationInput.getAttribute('data-length'), 10);

validationInput.addEventListener('blur', () => {
    if (validationInput.value.trim().length === dataValue) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    }
});
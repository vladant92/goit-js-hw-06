const loginForm = document.querySelector('.login-form');
const emailInput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (emailInput.value === '' || passwordInput.value === '') {
        alert('Please fill in all fields.');
    } else {
        const formData = {
            email: emailInput.value,
            password: passwordInput.value
        };
        console.log(formData);
        loginForm.reset();
    }
});

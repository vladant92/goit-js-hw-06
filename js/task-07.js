const fontSizeControl = document.getElementById('font-size-control');
const textContent = document.getElementById('text');

fontSizeControl.addEventListener('input', () => {
    textContent.style.fontSize = `${fontSizeControl.value}px`;
});
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const body = document.body;
const cssCode = document.getElementById('css-code');

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    displayCssCode();
}

function displayCssCode() {
    cssCode.textContent = `background: linear-gradient(to right, ${color1.value}, ${color2.value});`;
}

// Initialize with default values
setGradient();

// Add event listeners to color inputs
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
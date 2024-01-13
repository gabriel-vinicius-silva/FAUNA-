// theme-toggle.js

const themeSwitch = document.getElementById('theme-switch');
const themeStyle = document.getElementById('theme-style');

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        themeStyle.href = 'styles/style-dark.css';
    } else {
        themeStyle.href = 'styles/style-light.css';
    }
});

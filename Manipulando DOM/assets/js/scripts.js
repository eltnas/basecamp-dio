function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle(darkMode);
    h1.classList.toggle(darkMode);
    body.classList.toggle(darkMode);
    footer.classList.toggle(darkMode);
}

function changeText() {
    if(button.classList.contains(darkMode)) {
        button.innerText = 'Light Mode';
        h1.innerText = 'Dark Mode ON';
    }
    else {
        button.innerText = 'Dark Mode';
        h1.innerText = 'Light Mode ON';
    }
}
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const darkMode = 'dark-mode';


button.addEventListener('click', changeMode)
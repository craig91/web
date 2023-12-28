const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('id');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark Mode
function darkMode () {
    id.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src = 'img/undraw_prod_coder_dark.svg';
    image1.src = 'img/undraw_feeling_proud_dark.svg';
    image1.src = 'img/undraw_conceptual_idea_dark.svg';
}


switchTheme = (e) => {
    // console.log(e.target.checked);
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

// event listener
toggleSwitch.addEventListener('change', switchTheme);
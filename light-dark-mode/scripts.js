const toggleSwitch = document.querySelector('input[type="checkbox"]');
switchTheme = (e) => {
    // console.log(e.target.checked);
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
    }
}

// event listener
toggleSwitch.addEventListener('change', switchTheme);
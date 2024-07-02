// Toggle Switch for light and dark modes
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
const emEl = document.querySelector('em');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'Dark') {
        toggleSwitch.checked = true;
    }
    emEl.textContent = currentTheme;
}

function switchTheme(e) {
    // If the checkbox is check, it switches the mode to dark mode
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'Dark');
        localStorage.setItem('theme', 'Dark');
        emEl.textContent = 'Dark';
    }
    // Else it is light mode
    else {        
        document.documentElement.setAttribute('data-theme', 'Light');
        localStorage.setItem('theme', 'Light');
        emEl.textContent = 'Light';
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false); // Added event listener for changing the theme
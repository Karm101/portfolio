const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// 1. Check if user has a saved preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'dark') {
        toggleButton.innerText = '☀️ Light Mode';
    }
}

// 2. Toggle Logic
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    // Update Button Text and Save Preference
    if (body.classList.contains('dark')) {
        toggleButton.innerText = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.innerText = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});
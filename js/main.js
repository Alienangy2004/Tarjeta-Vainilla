//main.js

const btn = document.getElementById('toggle-theme');

btn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        btn.textContent = '🌙 Modo Noche';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        btn.textContent = '☀️ Modo Día';
    }
});
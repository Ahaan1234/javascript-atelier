function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === "dark-mode" ? "light-mode" : "dark-mode";
    root.className = newTheme;
    document.querySelector('.theme-name').textContent = newTheme;
}

document.querySelector(".theme-toggle").addEventListener('click', setTheme);
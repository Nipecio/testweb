function toggleTheme() {
    const body = document.body;
    const isLightMode = body.classList.toggle("light-mode");

    // Save the theme preference in localStorage
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
}

// Apply the saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }
});

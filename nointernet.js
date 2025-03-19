document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("hamburger-menu");
    menuToggle.innerHTML = "<div class='bar'></div><div class='bar'></div><div class='bar'></div>";
    document.body.prepend(menuToggle);

    const navMenu = document.querySelector(".nav-hero");

    menuToggle.addEventListener("click", function () {
        this.classList.toggle("active");
        navMenu.classList.toggle("open");
    });

    // Close menu when a navigation link is clicked
    document.querySelectorAll(".nav-ul .links").forEach(link => {
        link.addEventListener("click", function () {
            menuToggle.classList.remove("active");
            navMenu.classList.remove("open");
        });
    });
});
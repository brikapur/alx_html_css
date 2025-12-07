// Select menu icon and nav
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.querySelector(".nav");

// When clicking the icon, toggle the menu
menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

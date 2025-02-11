document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileNav = document.getElementById("mobile-nav");
    const mobileNavClose = document.getElementById("mobile-nav-close");

    // Open the mobile menu
    mobileMenu.addEventListener("click", function () {
        mobileNav.classList.add("active");
    });

    // Close the mobile menu
    mobileNavClose.addEventListener("click", function () {
        mobileNav.classList.remove("active");
    });

    // Close the menu when clicking on a link
    document.querySelectorAll(".mobile-nav-link").forEach(link => {
        link.addEventListener("click", function () {
            mobileNav.classList.remove("active");
        });
    });
});

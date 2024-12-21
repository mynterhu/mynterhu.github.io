// A fájl a portfólió JavaScript kódját tartalmazza. Itt találhatók a weboldal interaktív elemei, például a navigációs menü és az eseménykezelők.

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // További interaktív elemek és eseménykezelők hozzáadása itt
});
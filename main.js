// ======================================================
// Portfolio Website - main.js
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // Mobile Menu
    // ==========================================

    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {

        menuIcon.addEventListener("click", () => {

            navbar.classList.toggle("active");

            if (navbar.classList.contains("active")) {
                menuIcon.classList.replace("bx-menu", "bx-x");
            } else {
                menuIcon.classList.replace("bx-x", "bx-menu");
            }

        });

        document.querySelectorAll(".navbar a").forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("active");

                menuIcon.classList.replace("bx-x", "bx-menu");

            });

        });

    }

    // ==========================================
    // Dark Mode
    // ==========================================

    const darkBtn = document.querySelector("#darkMode");

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

        if (darkBtn) {
            darkBtn.innerHTML = "<i class='bx bx-sun'></i>";
        }

    }

    if (darkBtn) {

        darkBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {

                localStorage.setItem("theme", "dark");

                darkBtn.innerHTML = "<i class='bx bx-sun'></i>";

            } else {

                localStorage.setItem("theme", "light");

                darkBtn.innerHTML = "<i class='bx bx-moon'></i>";

            }

        });

    }

    // ==========================================
    // Typing Animation
    // ==========================================

    const typing = document.querySelector(".typing");

    if (typing) {

        const words = [
            "Videographer",
            "Video Editor",
            "Photo Editing",
            "UI/UX Designer",
            "Desain Grafis"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typing.textContent =
                    currentWord.substring(0, charIndex + 1);

                charIndex++;

                if (charIndex === currentWord.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1800);

                    return;

                }

            } else {

                typing.textContent =
                    currentWord.substring(0, charIndex - 1);

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    wordIndex++;

                    if (wordIndex >= words.length) {

                        wordIndex = 0;

                    }

                }

            }

            setTimeout(typeEffect, deleting ? 60 : 120);

        }

        typeEffect();

    }

    // ==========================================
    // Scroll Reveal
    // ==========================================

    const reveals = document.querySelectorAll(
        ".reveal, .skill-card, .portfolio-card, .service-box, .about-info div"
    );

    function revealElements() {

        reveals.forEach(el => {

            const top = el.getBoundingClientRect().top;

            const windowHeight = window.innerHeight;

            if (top < windowHeight - 100) {

                el.classList.add("active");

            }

        });

    }

    revealElements();

    window.addEventListener("scroll", revealElements);

    // ==========================================
    // Active Navigation
    // ==========================================

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    function activeMenu() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + current
            ) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", activeMenu);

    activeMenu();

    // ==========================================
    // Scroll To Top
    // ==========================================

    const scrollTop = document.querySelector(".scroll-top");

    function toggleScrollButton() {

        if (!scrollTop) return;

        if (window.scrollY > 400) {

            scrollTop.classList.add("show");

        } else {

            scrollTop.classList.remove("show");

        }

    }

    window.addEventListener("scroll", toggleScrollButton);

    toggleScrollButton();

    // ==========================================
    // Sticky Header Shadow
    // ==========================================

    const header = document.querySelector(".header");

    function stickyHeader() {

        if (!header) return;

        if (window.scrollY > 60) {

            header.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow = "none";

        }

    }

    window.addEventListener("scroll", stickyHeader);

    stickyHeader();

    // ==========================================
    // Portfolio Filtering
    // ==========================================

    const filterBtns = document.querySelectorAll(".filter-btn");
    const portfolioCards = document.querySelectorAll(".portfolio-card");

    if (filterBtns.length > 0 && portfolioCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {

                filterBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                const filterValue = btn.getAttribute("data-filter");

                portfolioCards.forEach(card => {
                    if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                        card.style.display = "flex";
                        card.style.animation = "none";
                        card.offsetHeight; /* trigger reflow */
                        card.style.animation = "fadeUp 0.6s forwards";
                    } else {
                        card.style.display = "none";
                    }
                });

            });
        });
    }

    // ==========================================
    // Page Loaded
    // ==========================================

    window.addEventListener("load", () => {

        document.body.classList.add("loaded");

    });

});
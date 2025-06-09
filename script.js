const typedText = document.getElementById("typed-text");
const phrases = ["UI/UX Designer", "El Dragon's Corp."];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typedText.textContent = currentPhrase.substring(0, charIndex--);
    } else {
        typedText.textContent = currentPhrase.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const delay = isDeleting ? 50 : 100;
    setTimeout(typeEffect, delay);
}

document.addEventListener("DOMContentLoaded", typeEffect);


  const sections = document.querySelectorAll("main, section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

    const scrollBtn = document.getElementById("scrollTopBtn");

  // Show / hide on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  // Smooth scroll to top
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  //reload page
window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);


    //hamburger menu
 const menuToggle = document.getElementById('menu-toggle');
  const menuIcon = document.getElementById('menu-icon');
  const navMenu = document.getElementById('nav-menu').querySelector('ul');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Toggle icon: list ↔ x
    if (menuIcon.classList.contains('bi-list')) {
      menuIcon.classList.replace('bi-list', 'bi-x');
    } else {
      menuIcon.classList.replace('bi-x', 'bi-list');
    }
  });
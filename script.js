// script.js
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  
  if (toggle) {
    toggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // Close menu when clicking a link (for smooth scroll on same page)
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
      }
    });
  });

  // Typing effect only on home page if element exists
  const typedSpan = document.getElementById('typing');
  if (typedSpan) {
    const phrases = [
      "Engineering excellence in Juba",
      "Premium concrete blocks",
      "Luxury construction experts",
      "Structural & civil engineers",
      "Your vision, our action"
    ];
    let i = 0, j = 0;
    let isDeleting = false;
    function loop() {
      if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
          typedSpan.textContent = phrases[i].substring(0, j);
          j++;
        }
        if (isDeleting && j <= phrases[i].length) {
          typedSpan.textContent = phrases[i].substring(0, j-1);
          j--;
        }
        if (j === phrases[i].length) {
          isDeleting = true;
          setTimeout(loop, 1500);
          return;
        }
        if (isDeleting && j === 0) {
          isDeleting = false;
          i = (i + 1) % phrases.length;
        }
      }
      setTimeout(loop, isDeleting ? 60 : 120);
    }
    loop();
  }

  // Smooth scroll for anchor links (if any)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

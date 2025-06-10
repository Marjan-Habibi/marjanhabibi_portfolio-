const toggleBtn = document.getElementById('toggle-btn');
const navLinks = document.getElementById('nav-links');

// Toggle menu when clicking the hamburger button
toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when any nav link is clicked (for mobile)
const navItems = document.querySelectorAll('.nav-links li a');

navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

window.addEventListener('DOMContentLoaded', () => {
    const fullText = "Hello! I'm Marwa";
    const element = document.getElementById("typed-text");
    let index = 0;
  
    function typeEffect() {
      if (index <= fullText.length) {
        element.textContent = fullText.substring(0, index);
        index++;
        setTimeout(typeEffect, 150); // سرعت تایپ
      }
    }
  
    typeEffect(); // شروع انیمیشن تایپ
  });
  

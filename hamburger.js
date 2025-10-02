// hamburger.js
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLists = document.querySelectorAll('.nav-links'); // selects all ULs

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLists.forEach(ul => ul.classList.toggle('active'));
    });
  }
});


const hamburgerToggle = document.querySelector('#hamburger-menu');
const navLinks = document.querySelectorAll('.nav-link');

for (let navLink of navLinks) {
  navLink.addEventListener('click', () => {
    if (hamburgerToggle.checked) {
      hamburgerToggle.checked = false;
    }
  });
}
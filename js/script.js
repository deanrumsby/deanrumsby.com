// Background animation
const canvas = document.querySelector('#background-animation');
const homeSection = document.querySelector('.home-section');
const homeSectionStyles = window.getComputedStyle(homeSection);
const homeWidth = homeSectionStyles.getPropertyValue('width');
const homeHeight = homeSectionStyles.getPropertyValue('height');

canvas.setAttribute('width', homeWidth);
canvas.setAttribute('height', homeHeight);

console.log(homeWidth, homeHeight);

const backgroundAnimation = new BackgroundAnimation(canvas);

backgroundAnimation.createShapes(5);
backgroundAnimation.animate();

// Hamburger menu
const hamburgerToggle = document.querySelector('#hamburger-menu');
const navLinks = document.querySelectorAll('.nav-link');

for (let navLink of navLinks) {
  navLink.addEventListener('click', () => {
    if (hamburgerToggle.checked) {
      hamburgerToggle.checked = false;
    }
  });
}
// Background animation
const canvas = document.querySelector('#background-animation');
const homeSection = document.querySelector('.home-section');

function setCanvasDimensions(canvas, element) {
  const compStyles = window.getComputedStyle(element);
  elementWidth = compStyles.getPropertyValue('width');
  elementHeight = compStyles.getPropertyValue('height');

  canvas.setAttribute('width', elementWidth);
  canvas.setAttribute('height', elementHeight);
}

setCanvasDimensions(canvas, homeSection);

const backgroundAnimation = new BackgroundAnimation(canvas);
backgroundAnimation.createShapes(5);
backgroundAnimation.animate();

window.addEventListener('resize', () => {
  setCanvasDimensions(canvas, homeSection);
});

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
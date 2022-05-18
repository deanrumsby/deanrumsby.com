const fixTechGridHeight = () => {
  const profile = document.querySelector('.profile');
  const techGrid = document.querySelector('.tech-list');
  const compStyles = window.getComputedStyle(profile);
  const profileHeight = compStyles.getPropertyValue('height');
  techGrid.style.maxHeight = profileHeight;
}

window.addEventListener('resize', fixTechGridHeight);

fixTechGridHeight();
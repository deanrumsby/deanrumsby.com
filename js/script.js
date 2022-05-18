const fixTechGridHeight = () => {
  const profile = document.querySelector('.profile');
  const techGrid = document.querySelector('.tech-list');
  const compStyles = window.getComputedStyle(profile);
  const profileHeight = compStyles.getPropertyValue('height');
  console.log(profileHeight);
  techGrid.style.maxHeight = profileHeight;
}

window.addEventListener('resize', fixTechGridHeight);

fixTechGridHeight();
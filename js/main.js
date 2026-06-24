document.addEventListener('DOMContentLoaded', () => {
  // Simple Parallax Effect
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    parallaxElements.forEach(el => {
      // Calculate movement based on mouse position
      const moveX = (x - 0.5) * 30; // Max movement 30px
      const moveY = (y - 0.5) * 30;
      
      el.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });

  // Scroll Parallax for background
  const hero = document.querySelector('.hero');
  window.addEventListener('scroll', () => {
    if (hero) {
      const scrollVal = window.scrollY;
      hero.style.backgroundPosition = `center ${scrollVal * 0.5}px`;
    }
  });
});

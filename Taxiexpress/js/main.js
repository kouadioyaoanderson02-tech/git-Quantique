// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) nav.style.background = '#000';
  else nav.style.background = 'var(--dark)';
});

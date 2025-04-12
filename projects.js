// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Contact Popup
  const contactPopup = document.getElementById('contact-popup');
  const contactBtn = document.getElementById('contact-btn');
  const closeBtn = document.querySelector('.close-btn');
  
  contactBtn.onclick = (e) => {
    e.preventDefault();
    contactPopup.style.display = 'flex';
  };
  
  closeBtn.onclick = () => {
    contactPopup.style.display = 'none';
  };
  
  window.onclick = (e) => {
    if (e.target === contactPopup) {
      contactPopup.style.display = 'none';
    }
  };
  
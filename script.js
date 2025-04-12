// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const targetSection = document.querySelector(this.hash);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Navbar Transparency Effect on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(13, 13, 26, 0.9)'; // Semi-transparent effect
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Popup Functionality
const aboutPopup = document.getElementById('about-popup');
const contactPopup = document.getElementById('contact-popup');
const aboutBtn = document.getElementById('about-btn');
const contactBtn = document.getElementById('contact-btn');
const closeBtns = document.querySelectorAll('.close-btn');

// Function to open a popup
function openPopup(popup) {
    if (popup) {
        popup.style.display = 'flex';
        setTimeout(() => {
            popup.style.opacity = '1';
            popup.style.transform = 'scale(1)';
        }, 50);
    }
}

// Function to close a popup
function closePopup(popup) {
    if (popup) {
        popup.style.opacity = '0';
        popup.style.transform = 'scale(0.9)';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    }
}

// Open About Us Popup
if (aboutBtn) {
    aboutBtn.addEventListener('click', (event) => {
        event.preventDefault();
        openPopup(aboutPopup);
    });
}

// Open Contact Popup
if (contactBtn) {
    contactBtn.addEventListener('click', (event) => {
        event.preventDefault();
        openPopup(contactPopup);
    });
}

// Close Popups
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        closePopup(aboutPopup);
        closePopup(contactPopup);
    });
});

// Close popups when clicking outside content
window.addEventListener('click', (event) => {
    if (event.target === aboutPopup) closePopup(aboutPopup);
    if (event.target === contactPopup) closePopup(contactPopup);
});

// Scroll Animation (Fade-in Effect)
const fadeInElements = document.querySelectorAll('.fade-in');

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

// Apply observer to all fade-in elements
fadeInElements.forEach(el => scrollObserver.observe(el));

// Property Card Hover Effect
document.querySelectorAll('.property-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-5px) scale(1.03)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    });
});

// Ensure popups do not trigger errors if elements are missing
document.addEventListener("DOMContentLoaded", () => {
    if (!aboutPopup) console.warn("About popup element not found.");
    if (!contactPopup) console.warn("Contact popup element not found.");
});

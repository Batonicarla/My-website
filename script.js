// Select DOM elements
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contact-form');
const projectSlider = document.querySelector('.project-slider');
const slides = document.querySelectorAll('.slide');

// Toggle Navbar on Mobile
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Close Navbar when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
        }
    });
});

// Form Validation for Contact Section
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const nameInput = contactForm.querySelector('input[type="text"]');
    const emailInput = contactForm.querySelector('input[type="email"]');
    const messageInput = contactForm.querySelector('textarea');

    let isValid = true;

    // Validate Name
    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        isValid = false;
    }

    // Validate Email
    if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    // Validate Message
    if (messageInput.value.trim() === '') {
        alert('Please enter a message.');
        isValid = false;
    }

    if (isValid) {
        alert('Message sent successfully!');
        contactForm.reset(); // Clear the form
    }
});

// Helper Function: Validate Email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Image Slider for Projects Section
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Allow manual navigation with buttons (optional)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    }
});
 

// JavaScript for Cool Docs Hugo website

document.addEventListener('DOMContentLoaded', (event) => {
    // Code to run after the DOM is fully loaded
    console.log('Cool Docs Hugo website loaded successfully');
});

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    alert('Form submitted successfully');
}

// Attach event listener to form submit
let contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

// Function to handle navigation menu toggle on small screens
function handleMenuToggle(event) {
    let navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('hidden');
    }
}

// Attach event listener to menu toggle button
let menuToggleBtn = document.getElementById('menu-toggle-btn');
if (menuToggleBtn) {
    menuToggleBtn.addEventListener('click', handleMenuToggle);
}
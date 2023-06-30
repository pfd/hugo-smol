// Custom JavaScript for Cool Docs website

document.addEventListener('DOMContentLoaded', (event) => {
    init();
});

function init() {
    loadContent();
}

function loadContent() {
    // Code to load content dynamically can be added here
}

document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    submitForm();
});

function submitForm() {
    // Code to submit the contact form can be added here
}

window.addEventListener('error', (event) => {
    errorOccurred(event.error);
});

function errorOccurred(error) {
    // Code to handle errors can be added here
    console.error('An error occurred:', error);
}
// Custom JavaScript for Cool Docs Hugo website

document.addEventListener('DOMContentLoaded', (event) => {
    // Code to run after the DOM is fully loaded
    console.log('Cool Docs Hugo website is fully loaded and ready');
});

// Function to add a class to an element
function addClass(elementId, className) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add(className);
    }
}

// Function to remove a class from an element
function removeClass(elementId, className) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.remove(className);
    }
}

// Add event listeners or other custom JavaScript below
// ...

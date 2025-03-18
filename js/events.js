// Open Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Close Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}



// Carousel Functionality
let scrollPosition = 0;
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const itemWidth = document.querySelector('.carousel-item').offsetWidth + 20; // Add gap
const totalItems = items.length;
const carouselWidth = carousel.offsetWidth;

function scrollCarousel(direction) {
    // Calculate the total scrollable width of the carousel
    const maxScrollPosition = (totalItems * itemWidth) - carouselWidth;

    if (direction === 'next') {
        // Prevent scrolling past the last item
        if (scrollPosition > -maxScrollPosition) {
            scrollPosition -= itemWidth;
            carousel.style.transform = `translateX(${scrollPosition}px)`;
        }
    } else {
        // Prevent scrolling past the first item
        if (scrollPosition < 0) {
            scrollPosition += itemWidth;
            carousel.style.transform = `translateX(${scrollPosition}px)`;
        }
    }
}


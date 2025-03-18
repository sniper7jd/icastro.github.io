// Select the carousel elements
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

// Function to change the active carousel item
function changeCarousel(index) {
    // Remove active class from all carousel items
    carouselItems.forEach(item => item.classList.remove('active'));

    // Add active class to the item at the current index
    carouselItems[index].classList.add('active');
}

// Function to move to the next carousel item
function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    changeCarousel(currentIndex);
}

// Function to move to the previous carousel item
function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    changeCarousel(currentIndex);
}

// Add event listeners for the next and previous buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Initialize the carousel by showing the first image
changeCarousel(currentIndex);

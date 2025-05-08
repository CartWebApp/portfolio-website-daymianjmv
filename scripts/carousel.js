// Image Carousel Script
const images = document.querySelectorAll('.carousel-img');
const modal = document.getElementById('carouselModal');
const modalImg = document.getElementById('carouselImage');
const closeBtn = document.querySelector('.close-carousel');
const prevBtn = document.getElementById('prevImage');
const nextBtn = document.getElementById('nextImage');
let currentIndex = 0;

// Debugging: Log the presence of elements
console.log('Images found:', images.length);
console.log('Modal exists:', !!modal);
console.log('Modal Image exists:', !!modalImg);
console.log('Close Button exists:', !!closeBtn);
console.log('Prev Button exists:', !!prevBtn);
console.log('Next Button exists:', !!nextBtn);

// Ensure there are images and modal elements before adding event listeners
if (images.length > 0 && modal && modalImg && closeBtn && prevBtn && nextBtn) {
    // Ensure modal is hidden on page load
    modal.style.display = 'none';

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            console.log('Image clicked:', img.src); // Debugging
            modal.style.display = 'flex'; // Use 'flex' for proper centering
            modalImg.src = img.src;
            currentIndex = index;
        });
    });

    closeBtn.addEventListener('click', () => {
        console.log('Close button clicked'); // Debugging
        modal.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        console.log('Previous button clicked, new index:', currentIndex); // Debugging
        modalImg.src = images[currentIndex].src;
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        console.log('Next button clicked, new index:', currentIndex); // Debugging
        modalImg.src = images[currentIndex].src;
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            console.log('Modal background clicked'); // Debugging
            modal.style.display = 'none';
        }
    });
} else {
    console.warn('Carousel elements are missing on this page.'); // Debugging
}

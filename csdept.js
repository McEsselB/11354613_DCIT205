// JavaScript for automatic image sliding
const slider = document.querySelector('.hero-slider');
let isTransitioning = false;

function slideImages() {
    if (!isTransitioning) {
        isTransitioning = true;
        const currentSlide = document.querySelector('.hero-slider img:first-child');
        slider.style.transition = 'transform 1s ease-in-out';
        slider.style.transform = 'translateX(-100%)';

        setTimeout(() => {
            slider.appendChild(currentSlide);
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
            isTransitioning = false;
        }, 1000);
    }
}

setInterval(slideImages, 3000); 

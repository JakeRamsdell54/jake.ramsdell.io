document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        showNextSlide();
    } else if (event.key === 'ArrowLeft') {
        showPrevSlide();
    }
});

function showNextSlide() {
    var currentSlide = document.querySelector('.slide:not([style*="display: none;"])');
    var nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
        currentSlide.style.display = 'none';
        nextSlide.style.display = 'block';
    }
}

function showPrevSlide() {
    var currentSlide = document.querySelector('.slide:not([style*="display: none;"])');
    var prevSlide = currentSlide.previousElementSibling;
    if (prevSlide) {
        currentSlide.style.display = 'none';
        prevSlide.style.display = 'block';
    }
}

const container = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const titleElement = document.getElementById('slideTitle');
const slideTitles = [
    'Impresionismo',
    'Realismo',
    'Romanticismo',
    'Renacimiento'
];
let currentSlide = 0;
let startX = 0;
let isDragging = false;

// Función para cambiar de slide
function changeSlide(delta) {
    if (delta > 0) {
        currentSlide = (currentSlide + 1) % slides.length;
    } else {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }
    container.style.transform = `translateX(-${currentSlide * 100}%)`;
    titleElement.textContent = slideTitles[currentSlide];  // Actualiza el título
}

// Función para bloquear el scroll en dispositivos móviles
function preventDefaultScroll(event) {
    event.preventDefault();
}

function handleWheel(event) {
    changeSlide(event.deltaY);
}

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
    isDragging = true;
}

function handleTouchMove(event) {
    if (!isDragging) return;
    const currentX = event.touches[0].clientX;
    const deltaX = startX - currentX;

    if (Math.abs(deltaX) > 50) {  // Threshold to detect swipe
        changeSlide(deltaX);
        isDragging = false;
    }
}

function handleTouchEnd() {
    isDragging = false;
}

// Bloquear el scroll en móviles
window.addEventListener('touchmove', preventDefaultScroll, { passive: false });

// Buttons logic
document.getElementById('prevBtn').addEventListener('click', () => {
    changeSlide(-1);
});
document.getElementById('nextBtn').addEventListener('click', () => {
    changeSlide(1);
});

window.addEventListener('wheel', handleWheel);
container.addEventListener('touchstart', handleTouchStart);
container.addEventListener('touchmove', handleTouchMove);
container.addEventListener('touchend', handleTouchEnd);
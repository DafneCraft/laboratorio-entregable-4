
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)){
        menu.classList.remove('active');
    }
});

//Deberia cambiar el icono del menu en movil cuando se abre
//menuIcon.addEventListener('click', () => {
//    menu.classList.toggle('active')
//    menuIcon.textContent = menu.classList.contains('active') ? '✖': '☰';
//});

const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

// Función para mover el carrusel
function moveToSlide(index) {
    const slideWidth = document.querySelector('.slide').clientWidth;
    slides.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;
}

// Evento para el botón "Siguiente"
nextButton.addEventListener('click', () => {
    if (currentIndex < slides.children.length - 1) {
        moveToSlide(currentIndex + 1);
    } else {
        moveToSlide(0); // Vuelve al primer slide
    }
});

// Evento para el botón "Anterior"
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        moveToSlide(currentIndex - 1);
    } else {
        moveToSlide(slides.children.length - 1); // Vuelve al último slide
    }
});
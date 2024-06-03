document.addEventListener('DOMContentLoaded', function() {
    // Función para ocultar el mensaje de bienvenida
    setTimeout(() => {
        document.querySelector('.welcome-message').classList.add('hidden');
        document.querySelector('.content').classList.remove('blur');
    }, 2000);

    // Función para cambiar automáticamente las imágenes del carrusel
    let index = 0;
    const slides = document.querySelectorAll('.slide-open');
    setInterval(() => {
        slides[index].checked = true;
        index++;
        if (index === slides.length) {
            index = 0;
        }
    }, 2000); // Cambia de imagen cada 5 segundos
});

// Función para desplazarse suavemente hacia arriba
function subirArriba() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar el botón de subir cuando se desplaza hacia abajo
window.onscroll = function() { mostrarBotonSubir() };
function mostrarBotonSubir() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnSubir").style.display = "block";
    } else {
        document.getElementById("btnSubir").style.display = "none";
    }
}
const fotos = document.querySelectorAll('.foto');

fotos.forEach((foto) => {
    foto.addEventListener('click', () => {
        foto.classList.toggle('clicked'); //cambia borde al hacer click 
    });
});
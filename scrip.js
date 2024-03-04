const fotos = document.querySelectorAll('.foto');

fotos.forEach((foto) => {
    foto.addEventListener('click', () => {
        const columna = foto.parentElement; 
        const fotosColumna = columna.querySelectorAll('.foto'); //tener todas las fotos de una columna

        fotosColumna.forEach((fotoColumna) => {
            fotoColumna.classList.remove('clicked'); //quitar la clase 'clicked' de todas las fotos de una columna
        });

        foto.classList.add('clicked'); //Agregar la clase 'clicked' a la foto que es seleccionada
    });
});

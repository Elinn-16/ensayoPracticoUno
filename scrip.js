const fotos = document.querySelectorAll('.foto');
let imagenesSeleccionadas = [];

fotos.forEach((foto) => {
    foto.addEventListener('click', () => {
        const columna = foto.parentElement; 
        const fotosColumna = columna.querySelectorAll('.foto'); //tener todas las fotos de una columna

        fotosColumna.forEach((fotoColumna) => {
            fotoColumna.classList.remove('clicked'); //quitar la clase 'clicked' de todas las fotos de una columna
        });

        foto.classList.add('clicked'); //Agregar la clase 'clicked' a la foto que es seleccionada
    
        if (imagenesSeleccionadas.length === 2) {
            const primeraImagen = imagenesSeleccionadas[0];
            const segundaImagen = imagenesSeleccionadas[1];

            if (primeraImagen.id === segundaImagen.id) {
                alert('¡Felicitaciones acertaste! ');
                primeraImagen.remove();
                segundaImagen.remove();
                imagenesSeleccionadas = [];
            } else {
                imagenesSeleccionadas = [];
            }
        } else {
            imagenesSeleccionadas.push(foto); // Agrega la imagen seleccionada al array
        }

    });
});

const fotos = document.querySelectorAll('.foto');
let imagenesSeleccionadas = [];

fotos.forEach((foto) => {
    foto.addEventListener('click', () => {
        const columna = foto.parentElement; 
        const fotosColumna = columna.querySelectorAll('.foto'); //selecciona las fotos y la guarda en una lista 

        fotosColumna.forEach((fotoColumna) => {
            fotoColumna.classList.remove('clicked'); 
        });

        foto.classList.add('clicked'); //resanta la foto seleccionada 
    
        if (imagenesSeleccionadas.length === 2) {
            const primeraImagen = imagenesSeleccionadas[0];
            const segundaImagen = imagenesSeleccionadas[1];

            if (primeraImagen.id === segundaImagen.id) {
                alert('Felicitaciones, ¡asi se hace!');
                primeraImagen.remove();
                segundaImagen.remove();
                imagenesSeleccionadas = [];
            } else {
                alert('Lo siento mucho, ¡mejor la próxima!');
                imagenesSeleccionadas.forEach((img) => {
                    img.classList.remove('clicked'); // Eliminar la clase 'clicked'
                });
                imagenesSeleccionadas = [];
            }
        } else {
            imagenesSeleccionadas.push(foto); // Agrega la imagen seleccionada al arreglo
        }

    });
});

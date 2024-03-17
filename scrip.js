const fotos = document.querySelectorAll('.foto');
let imagenesSeleccionadas = [];

const botonVolverEmpezar = document.getElementById('volverEmpezar');
const modalCompleto = document.getElementById('modalCompleto');

// Función para mostrar el modal de completado y volver a empezar
function mostrarModalCompleto() {
    modalCompleto.style.display = 'block';
}

// Función para volver a empezar el juego
function volverEmpezar() {
  // Ocultar el modal
    modalCompleto.style.display = 'none';
    
    reiniciarJuego();
}

// Añadir evento al botón volver a empezar
botonVolverEmpezar.addEventListener('click', volverEmpezar);

fotos.forEach((foto) => {
    foto.addEventListener('click', () => {
        const columna = foto.parentElement; 
        const fotosColumna = columna.querySelectorAll('.foto');

        fotosColumna.forEach((fotoColumna) => {
            fotoColumna.classList.remove('clicked'); 
        });

        foto.classList.add('clicked');

        if (imagenesSeleccionadas.length === 2) {
            const primeraImagen = imagenesSeleccionadas[0];
            const segundaImagen = imagenesSeleccionadas[1];

            if (primeraImagen.id === segundaImagen.id) {
                primeraImagen.remove();
                segundaImagen.remove();
                imagenesSeleccionadas = [];

                // Verificar si se han seleccionado todas las imágenes
                const imagenesRestantes = document.querySelectorAll('.foto');
                if (imagenesRestantes.length === 0) {
                    mostrarModalCompleto();
                }
            } else {
                imagenesSeleccionadas.forEach((img) => {
                    img.classList.remove('clicked');
                });
                imagenesSeleccionadas = [];
            }
        } else {
            imagenesSeleccionadas.push(foto);
        }

    });
});

// Función para reiniciar el juego (puedes implementarla según tus necesidades)
function reiniciarJuego() {
    // Aquí puedes implementar la lógica para reiniciar el juego
}

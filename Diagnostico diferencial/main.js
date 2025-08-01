// Espera a que el DOM esté completamente cargado.
document.addEventListener('DOMContentLoaded', () => {

    // Selecciona los elementos clave de la interfaz.
    const selector = document.getElementById('presentation-selector');
    const allResultLists = document.querySelectorAll('.differential-list');

    /**
     * Función para actualizar la vista basada en la selección.
     * @param {string} selectedValue - El valor de la opción seleccionada.
     */
    function updateView(selectedValue) {
        // Oculta todas las listas de resultados.
        allResultLists.forEach(list => {
            list.classList.remove('active');
        });

        // Construye el ID del panel de contenido que se debe mostrar.
        const targetId = selectedValue;
        const targetElement = document.getElementById(targetId);

        // Muestra el panel de contenido correspondiente si existe.
        if (targetElement) {
            targetElement.classList.add('active');
        }
    }

    // Añade un manejador de eventos para el cambio en el selector.
    selector.addEventListener('change', () => {
        updateView(selector.value);
    });

    // Estado Inicial: Muestra la lista para la primera opción al cargar la página.
    updateView(selector.value);

});
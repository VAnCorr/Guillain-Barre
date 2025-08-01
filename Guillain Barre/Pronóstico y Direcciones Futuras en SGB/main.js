// Espera a que el DOM esté completamente cargado.
document.addEventListener('DOMContentLoaded', () => {

    // Selecciona todos los elementos <details> que forman el acordeón.
    const accordionItems = document.querySelectorAll('.accordion-item');

    // Itera sobre cada item del acordeón para añadirle un manejador de eventos.
    accordionItems.forEach(item => {
        // El evento 'toggle' se dispara cada vez que un <details> se abre o se cierra.
        item.addEventListener('toggle', (event) => {
            // Si el item actual se acaba de abrir...
            if (item.open) {
                // ...entonces, cierra todos los demás items.
                closeOthers(item);
            }
        });
    });

    /**
     * Función que cierra todos los items del acordeón excepto el que se acaba de abrir.
     * @param {HTMLElement} currentItem - El elemento <details> que no debe ser cerrado.
     */
    function closeOthers(currentItem) {
        accordionItems.forEach(item => {
            // Si el item no es el que se acaba de abrir...
            if (item !== currentItem) {
                // ...ciérralo estableciendo su propiedad 'open' a false.
                item.open = false;
            }
        });
    }
});
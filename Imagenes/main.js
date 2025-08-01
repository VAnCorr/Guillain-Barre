// Espera a que el DOM esté completamente cargado.
document.addEventListener('DOMContentLoaded', () => {

    // Selecciona todos los botones y paneles de contenido de las pestañas.
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Añade un manejador de evento 'click' a cada botón de pestaña.
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            // Obtiene el ID del contenido objetivo desde el atributo 'data-target'.
            const targetId = button.dataset.target;
            const targetContent = document.getElementById(targetId);

            // 1. Gestiona el estado 'active' de los botones.
            // Quita la clase 'active' de todos los botones.
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Añade la clase 'active' solo al botón que fue presionado.
            button.classList.add('active');

            // 2. Gestiona la visibilidad del contenido.
            // Oculta todos los paneles de contenido.
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Muestra el panel de contenido correspondiente si existe.
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // El estado inicial (mostrando la primera pestaña) ya está definido
    // en el HTML con la clase 'active', por lo que no se necesita código JS
    // adicional para configurarlo al cargar la página.
});
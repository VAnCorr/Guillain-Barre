// Espera a que el DOM esté completamente cargado para ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // --- MANEJO DE LA NAVEGACIÓN PRINCIPAL DE VARIANTES ---

    // Selecciona todos los botones de navegación de variantes y los paneles de contenido
    const variantButtons = document.querySelectorAll('.variant-btn');
    const contentPanels = document.querySelectorAll('.content-panel');

    // Añade un evento de clic a cada botón de variante
    variantButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Obtiene el ID del panel de contenido desde el atributo 'data-target' del botón
            const targetPanelId = button.dataset.target;
            const targetPanel = document.getElementById(targetPanelId);

            // 1. Quita la clase 'active' de todos los botones
            variantButtons.forEach(btn => btn.classList.remove('active'));
            // 2. Añade la clase 'active' solo al botón que fue presionado
            button.classList.add('active');

            // 3. Oculta todos los paneles de contenido
            contentPanels.forEach(panel => panel.classList.remove('visible'));
            // 4. Muestra únicamente el panel de contenido correspondiente
            if (targetPanel) {
                targetPanel.classList.add('visible');
            }
        });
    });

    // --- MANEJO DE LAS PESTAÑAS (TABS) DENTRO DE VARIANTES AXONALES ---
    
    // Selecciona los botones y contenidos de las pestañas dentro del panel axonal
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Obtiene el ID del contenido de la pestaña desde el atributo 'data-tab'
            const targetTabId = button.dataset.tab;
            const targetTabContent = document.getElementById(targetTabId);

            // 1. Quita la clase 'active' de todos los botones de pestaña
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // 2. Añade la clase 'active' al botón de pestaña presionado
            button.classList.add('active');

            // 3. Oculta todos los contenidos de las pestañas
            tabContents.forEach(content => content.classList.remove('active'));
            // 4. Muestra el contenido de la pestaña correspondiente
            if (targetTabContent) {
                targetTabContent.classList.add('active');
            }
        });
    });

    // NOTA: El estado inicial (qué se muestra al cargar la página)
    // ya está definido en el HTML y CSS con las clases 'active' y 'visible',
    // por lo que no se necesita código JS adicional para establecerlo.
});
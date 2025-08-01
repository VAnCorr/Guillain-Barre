// Espera a que el DOM esté completamente cargado.
document.addEventListener('DOMContentLoaded', () => {

    // Selecciona todos los botones de navegación de tópicos.
    const topicButtons = document.querySelectorAll('.topic-btn');
    
    // Selecciona todos los paneles de contenido de todos los tópicos.
    const allTopicContents = document.querySelectorAll('.topic-content');

    // Añade un manejador de evento 'click' a cada botón de tópico.
    topicButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            // Obtiene el identificador del tópico desde el atributo 'data-topic' del botón.
            const topic = button.dataset.topic;

            // 1. GESTIONAR EL ESTADO ACTIVO DE LOS BOTONES
            // Quita la clase 'active' de todos los botones.
            topicButtons.forEach(btn => btn.classList.remove('active'));
            // Añade la clase 'active' solo al botón que fue presionado.
            button.classList.add('active');

            // 2. GESTIONAR LA VISIBILIDAD DEL CONTENIDO
            // Oculta todo el contenido de todos los tópicos.
            allTopicContents.forEach(content => content.classList.remove('active'));
            
            // Construye los IDs para el contenido de AIDP y AMAN del tópico seleccionado.
            // Ejemplo: si topic = 'diana', los IDs serán 'diana-aidp' y 'diana-aman'.
            const aidpContent = document.getElementById(`${topic}-aidp`);
            const amanContent = document.getElementById(`${topic}-aman`);

            // Muestra el contenido correspondiente en ambas columnas si existe.
            if (aidpContent && amanContent) {
                aidpContent.classList.add('active');
                amanContent.classList.add('active');
            }
        });
    });
    
    // El estado inicial (qué se muestra al cargar la página) ya está definido
    // en el HTML con la clase 'active', por lo que no se necesita código JS
    // adicional para establecerlo.

});
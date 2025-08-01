// Espera a que el DOM esté completamente cargado.
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA PARA LA NAVEGACIÓN PRINCIPAL DE PILARES ---
    const pillarButtons = document.querySelectorAll('.pillar-btn');
    const pillarContents = document.querySelectorAll('.pillar-content');

    pillarButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            const targetContent = document.getElementById(targetId);

            // Gestionar estado activo de los botones
            pillarButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Gestionar visibilidad del contenido
            pillarContents.forEach(content => content.classList.remove('active'));
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });


    // --- LÓGICA PARA LA SUB-NAVEGACIÓN DE PATRONES EN ELECTRODIAGNÓSTICO ---
    const patternButtons = document.querySelectorAll('.pattern-btn');
    const patternContents = document.querySelectorAll('.pattern-content');

    patternButtons.forEach(button => {
        button.addEventListener('click', () => {
            const patternId = button.dataset.pattern;
            const targetPatternContent = document.getElementById(patternId);

            // Gestionar estado activo de los botones de patrón
            patternButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Gestionar visibilidad del contenido de patrón
            patternContents.forEach(content => content.classList.remove('active'));
            if (targetPatternContent) {
                targetPatternContent.classList.add('active');
            }
        });
    });

    // El estado inicial (qué se muestra al cargar) ya está definido en el HTML
    // con la clase 'active', por lo que no se necesita JS para establecerlo.
});
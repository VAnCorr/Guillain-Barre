// Espera a que el DOM esté completamente cargado.
document.addEventListener('DOMContentLoaded', () => {

    // --- SELECCIÓN DE ELEMENTOS DEL DOM ---
    const steps = document.querySelectorAll('.step-panel');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const dots = document.querySelectorAll('.dot');
    
    // --- GESTIÓN DEL ESTADO ---
    // Variable para rastrear el paso actual (índice basado en 0).
    let currentStep = 0;

    /**
     * Función central para actualizar la interfaz.
     * Muestra el paso correcto, actualiza los puntos de progreso y el estado de los botones.
     */
    function updateStepDisplay() {
        // 1. Actualizar los paneles de los pasos.
        steps.forEach((step, index) => {
            // Si el índice del paso coincide con el paso actual, muéstralo. Si no, ocúltalo.
            step.classList.toggle('active-step', index === currentStep);
        });

        // 2. Actualizar los puntos del indicador de progreso.
        dots.forEach((dot, index) => {
            // Si el índice del punto coincide con el paso actual, márcalo como activo.
            dot.classList.toggle('active', index === currentStep);
        });

        // 3. Actualizar el estado de los botones de navegación.
        // El botón "Anterior" se deshabilita si estamos en el primer paso (índice 0).
        prevButton.disabled = currentStep === 0;
        // El botón "Siguiente" se deshabilita si estamos en el último paso.
        nextButton.disabled = currentStep === steps.length - 1;
    }

    // --- MANEJADORES DE EVENTOS ---

    // Evento para el botón "Siguiente".
    nextButton.addEventListener('click', () => {
        // Solo incrementa si no estamos en el último paso.
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateStepDisplay();
        }
    });

    // Evento para el botón "Anterior".
    prevButton.addEventListener('click', () => {
        // Solo decrementa si no estamos en el primer paso.
        if (currentStep > 0) {
            currentStep--;
            updateStepDisplay();
        }
    });
    
    // --- ESTADO INICIAL ---
    // Llama a la función una vez al cargar la página para configurar la vista inicial (Paso 1).
    updateStepDisplay();

});
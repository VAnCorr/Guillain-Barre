// Espera a que el contenido del DOM esté completamente cargado antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA PARA EL DIAGRAMA INTERACTIVO DE LA NEURONA ---

    // Obtener referencias a los elementos del DOM que vamos a manipular.
    const btnDemiel = document.getElementById('btn-demiel');
    const btnAxonal = document.getElementById('btn-axonal');
    const btnReset = document.getElementById('btn-reset');
    
    const myelinSheath = document.getElementById('myelin-sheath');
    const axonPath = document.getElementById('axon-path');
    
    const explanationText = document.getElementById('explanation-text');
    const explanationBox = document.getElementById('explanation-box');
    const allMyelinRects = myelinSheath.querySelectorAll('.myelin');

    // Función para restaurar el estado original de la neurona.
    // Elimina todas las clases de daño y restablece el texto de explicación.
    function resetNeuronState() {
        allMyelinRects.forEach(rect => rect.classList.remove('myelin-damaged'));
        axonPath.classList.remove('axon-damaged');
        explanationText.textContent = 'Selecciona un tipo de daño para ver la explicación.';
        explanationBox.style.borderColor = 'var(--secondary-color)';
    }

    // Event Listener para el botón "Daño Desmielinizante".
    btnDemiel.addEventListener('click', () => {
        resetNeuronState(); // Primero, restaura para evitar estados mixtos.
        // Agrega la clase 'myelin-damaged' a cada segmento de mielina.
        allMyelinRects.forEach(rect => rect.classList.add('myelin-damaged'));
        // Actualiza el texto de explicación.
        explanationText.innerHTML = '<strong>Daño Desmielinizante (AIDP):</strong> El sistema inmune ataca y destruye la <strong>vaina de mielina</strong>. Esto ralentiza o bloquea la señal nerviosa, causando debilidad.';
        explanationBox.style.borderColor = 'var(--warning-color)';
    });

    // Event Listener para el botón "Daño Axonal".
    btnAxonal.addEventListener('click', () => {
        resetNeuronState(); // Restaura el estado.
        // Agrega la clase 'axon-damaged' al axón.
        axonPath.classList.add('axon-damaged');
        // Actualiza el texto de explicación.
        explanationText.innerHTML = '<strong>Daño Axonal (AMAN/AMSAN):</strong> El ataque se dirige directamente al <strong>axón</strong> (el "cable" nervioso). Esto interrumpe la señal de forma más directa y puede llevar a una recuperación más prolongada.';
        explanationBox.style.borderColor = 'var(--warning-color)';
    });

    // Event Listener para el botón "Restaurar Neurona".
    btnReset.addEventListener('click', () => {
        resetNeuronState();
    });


    // --- LÓGICA PARA LA ANIMACIÓN DE ENTRADA AL DESPLAZAR (SCROLL) ---

    // Selecciona todas las secciones que deben tener el efecto de aparición.
    const sections = document.querySelectorAll('.content-section');

    // Configura el Intersection Observer.
    // Esta es una API moderna y eficiente para detectar cuándo un elemento entra en la pantalla.
    const observerOptions = {
        root: null, // Observa intersecciones con el viewport del navegador.
        rootMargin: '0px',
        threshold: 0.1 // El callback se activa cuando al menos el 10% del elemento es visible.
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento está intersectando (visible en la pantalla).
            if (entry.isIntersecting) {
                // Agrega la clase 'visible', que activa la animación CSS.
                entry.target.classList.add('visible');
                // Deja de observar este elemento para que la animación no se repita.
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Pide al observer que vigile cada una de las secciones.
    sections.forEach(section => {
        observer.observe(section);
    });
});
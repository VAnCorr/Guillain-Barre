// Espera a que el DOM esté completamente cargado.
document.addEventListener('DOMContentLoaded', () => {

    // Selecciona todos los elementos que queremos animar al hacer scroll.
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    // Configura las opciones para el Intersection Observer.
    // 'root: null' significa que el viewport es el área de observación.
    // 'threshold: 0.1' significa que la animación se activará cuando
    // el 10% del elemento sea visible.
    const observerOptions = {
        root: null,
        threshold: 0.1,
    };

    // Crea un nuevo Intersection Observer.
    const observer = new IntersectionObserver((entries, observer) => {
        // Itera sobre cada 'entry' (elemento observado).
        entries.forEach(entry => {
            // Si el elemento está intersectando el viewport...
            if (entry.isIntersecting) {
                // Añade la clase 'is-visible' para activar la animación CSS.
                entry.target.classList.add('is-visible');
                // Una vez que el elemento es visible, deja de observarlo
                // para que la animación no se repita.
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Pide al observer que observe cada uno de los elementos seleccionados.
    revealElements.forEach(element => {
        observer.observe(element);
    });

});
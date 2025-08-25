document.addEventListener('DOMContentLoaded', () => {

    // --- NAVEGACIÓN POR SECCIONES ---
    const sections = document.querySelectorAll('.content-section');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const pageIndicator = document.getElementById('page-indicator');
    let currentSectionIndex = 0;

    const updateSections = () => {
        // Oculta todas las secciones
        sections.forEach((section, index) => {
            section.classList.remove('active');
        });

        // Muestra solo la sección actual
        sections[currentSectionIndex].classList.add('active');

        // Actualiza el indicador de página
        pageIndicator.textContent = `${currentSectionIndex + 1} / ${sections.length}`;
        
        // Habilita o deshabilita los botones de navegación
        prevBtn.disabled = currentSectionIndex === 0;
        nextBtn.disabled = currentSectionIndex === sections.length - 1;
    };

    nextBtn.addEventListener('click', () => {
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
            updateSections();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            updateSections();
        }
    });

    // --- LÓGICA DEL DESAFÍO DE RECUPERACIÓN ---
    const checkMcqBtn = document.getElementById('check-mcq-btn');
    const mcqFeedback = document.getElementById('mcq-feedback');
    
    if(checkMcqBtn) {
        checkMcqBtn.addEventListener('click', function() {
            const selectedOptions = document.querySelectorAll('input[name="mcq1"]:checked');
            const selectedValues = Array.from(selectedOptions).map(cb => cb.value);
            
            mcqFeedback.style.display = 'block';
            
            if (selectedValues.length === 2 && selectedValues.includes('b') && selectedValues.includes('c')) {
                mcqFeedback.textContent = '¡Correcto! Un neumotórax (disminuye la compliance) y secreciones en el tubo (aumentan la resistencia) son causas clásicas de un aumento en la presión pico.';
                mcqFeedback.className = 'feedback correct';
            } else {
                mcqFeedback.textContent = 'Incorrecto. Revisa la ecuación del movimiento. La presión aumenta cuando la compliance disminuye o la resistencia aumenta.';
                mcqFeedback.className = 'feedback incorrect';
            }
        });
    }

    // --- LÓGICA DEL MINI-CASO CLÍNICO ---
    const revealBtn = document.getElementById('reveal-case-study-btn');
    const analysisDiv = document.getElementById('case-study-analysis');
    
    if(revealBtn) {
        revealBtn.addEventListener('click', function() {
            if (analysisDiv.style.display === 'none') {
                analysisDiv.style.display = 'block';
                revealBtn.textContent = 'Ocultar Análisis';
            } else {
                analysisDiv.style.display = 'none';
                revealBtn.textContent = 'Revelar Análisis Experto';
            }
        });
    }

    // --- LÓGICA DE LA METACOGNICIÓN ---
    const slider = document.getElementById('confidence-slider');
    const sliderValue = document.getElementById('slider-value');
    
    if(slider) {
        slider.addEventListener('input', function() {
            sliderValue.textContent = slider.value;
        });
    }

    // Inicializar la primera vista
    updateSections();
});

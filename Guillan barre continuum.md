Este proyecto consiste en tres archivos autónomos: index.html, styles.css y main.js. Simplemente copia el contenido de cada archivo, guárdalos con sus respectivos nombres en la misma carpeta y abre index.html en tu navegador para ver la aplicación en funcionamiento.

Descripción del Proyecto Interactivo
La página web explica el SGB de una manera visual y paso a paso:

Gráfico Interactivo: Un gráfico central de "Severidad vs. Tiempo" es el protagonista. Los usuarios pueden hacer clic en los botones de cada fase (Prodrómica, Progresiva, Meseta, Recuperación) para ver cómo avanza la enfermedad en el gráfico. La línea se dibuja dinámicamente, y la información de esa fase aparece detallada a la derecha.

Diagnóstico Diferencial por Tiempo: Una sección interactiva con un control deslizante (slider) permite al usuario ajustar la "Duración de la Progresión". Al moverlo, la tarjeta de diagnóstico se actualiza en tiempo real, mostrando si el cuadro clínico corresponde a SGB, SIDP o CIDP, reforzando el criterio temporal como factor clave.

Diseño Limpio y Moderno: La interfaz es clara, con una paleta de colores suaves y tipografía legible para facilitar la concentración en el contenido educativo.

Código Comentado: Tanto el CSS como el JavaScript están comentados para que GitHub Copilot (o cualquier desarrollador) pueda entender fácilmente la estructura y la lógica detrás de cada funcionalidad.

1. Archivo index.html
HTML

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curso Clínico del Síndrome de Guillain-Barré (SGB)</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>

    <header>
        <h1>Curso Clínico del Síndrome de Guillain-Barré (SGB)</h1>
        <p>Una guía interactiva para entender su evolución y diagnóstico</p>
    </header>

    <main>
        <section class="intro">
            <h2>¿Qué es el Síndrome de Guillain-Barré?</h2>
            <p>El SGB es una polirradiculoneuropatía desmielinizante aguda en la que el sistema inmunitario del cuerpo ataca por error a parte de su sistema nervioso periférico. Su rasgo distintivo es una evolución clínica predecible que se desarrolla en fases. Este curso temporal es fundamental para el diagnóstico y para diferenciarlo de otras neuropatías similares.</p>
        </section>

        <section class="interactive-timeline">
            <h2>Las 4 Fases del SGB</h2>
            <div class="timeline-container">
                <div class="graph-area">
                    <svg id="gb-graph" viewBox="0 0 500 250">
                        <line x1="40" y1="220" x2="480" y2="220" stroke="#999" stroke-width="1.5"/> <line x1="40" y1="20" x2="40" y2="220" stroke="#999" stroke-width="1.5"/> <text x="250" y="245" text-anchor="middle" fill="#555">Tiempo (Semanas)</text>
                        <text x="15" y="125" writing-mode="vertical-rl" text-anchor="middle" fill="#555">Severidad</text>
                        <text x="430" y="30" text-anchor="middle" fill="#d32f2f" font-weight="bold" id="nadir-text" class="hidden">Nadir Clínico</text>

                        <path id="clinical-course-line" d="M 40 210 C 60 210, 80 50, 150 50 S 220 50, 250 50 L 320 50 C 350 50, 380 180, 460 210" fill="none" stroke="#007bff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="info-area">
                    <div class="phase-controls">
                        <button class="phase-btn active" data-phase="prodromica">1. Prodrómica</button>
                        <button class="phase-btn" data-phase="progresiva">2. Progresiva</button>
                        <button class="phase-btn" data-phase="meseta">3. Meseta</button>
                        <button class="phase-btn" data-phase="recuperacion">4. Recuperación</button>
                    </div>
                    <div id="phase-info-card" class="info-card">
                        </div>
                </div>
            </div>
        </section>

        <section class="differential-diagnosis">
            <h2>Diagnóstico Diferencial por Tiempo</h2>
            <p>La duración de la fase progresiva es clave para clasificar la enfermedad. Usa el control deslizante para ver cómo cambia el diagnóstico.</p>
            <div class="diagnosis-tool">
                <div class="slider-container">
                    <label for="progression-slider">Duración de la Progresión: <span id="slider-value">4</span> semanas</label>
                    <input type="range" min="1" max="12" value="4" class="slider" id="progression-slider">
                    <div class="slider-labels">
                        <span>&lt;4 sem</span>
                        <span>4-8 sem</span>
                        <span>&gt;8 sem</span>
                    </div>
                </div>
                <div id="diagnosis-card" class="info-card diagnosis-result">
                    <h3>Diagnóstico: AIDP (SGB Clásico)</h3>
                    <p>La progresión dura menos de 4 semanas. Se considera un curso agudo, característico del Síndrome de Guillain-Barré.</p>
                </div>
            </div>
        </section>

        <section class="key-terms">
            <h2>Definiciones Clave</h2>
            <div class="terms-grid">
                <div class="term-card">
                    <h3>Polirradiculoneuropatía Desmielinizante</h3>
                    <p>Enfermedad que afecta las raíces nerviosas y nervios periféricos, causando la pérdida de mielina y alterando las señales nerviosas.</p>
                </div>
                <div class="term-card">
                    <h3>Nadir Clínico</h3>
                    <p>El punto de máxima severidad de los síntomas, especialmente la debilidad muscular.</p>
                </div>
                <div class="term-card">
                    <h3>Curso Monofásico</h3>
                    <p>Un único episodio de una enfermedad que progresa y luego se resuelve, sin recurrencias (presente en >95% de los casos de SGB).</p>
                </div>
                <div class="term-card">
                    <h3>Fluctuaciones Relacionadas con el Tratamiento (TRF)</h3>
                    <p>Empeoramiento transitorio de los síntomas dentro de las 8 semanas tras iniciar inmunoterapia. No se considera una recaída.</p>
                </div>
            </div>
        </section>

    </main>

    <footer>
        <p>Proyecto educativo creado por Gem 2 para explicar conceptos médicos complejos de forma interactiva.</p>
    </footer>

    <script src="main.js"></script>
</body>
</html>
2. Archivo styles.css
CSS

/* Estilos Generales y Tipografía */
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --bg-color: #f8f9fa;
    --card-bg-color: #ffffff;
    --text-color: #343a40;
    --border-color: #dee2e6;
    --shadow-color: rgba(0, 0, 0, 0.1);

    --phase-prodromica: #ffc107;
    --phase-progresiva: #dc3545;
    --phase-meseta: #fd7e14;
    --phase-recuperacion: #28a745;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--bg-color);
    margin: 0;
    padding: 0;
}

header {
    background-color: var(--primary-color);
    color: white;
    text-align: center;
    padding: 2rem 1rem;
    box-shadow: 0 2px 4px var(--shadow-color);
}

h1 {
    font-weight: 700;
    margin-bottom: 0.5rem;
}

h2 {
    font-weight: 600;
    color: var(--primary-color);
    text-align: center;
    margin-bottom: 1.5rem;
}

main {
    max-width: 1100px;
    margin: 2rem auto;
    padding: 0 1rem;
}

section {
    background-color: var(--card-bg-color);
    border-radius: 8px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 8px var(--shadow-color);
}

/* Contenedor de la línea de tiempo interactiva */
.timeline-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
}

.graph-area svg {
    width: 100%;
    height: auto;
}

#clinical-course-line {
    /* Animación de la línea del gráfico */
    stroke-dasharray: 1000; /* Longitud estimada del path, suficientemente grande */
    stroke-dashoffset: 1000;
    transition: stroke-dashoffset 1s ease-in-out;
}

.hidden {
    display: none;
}

/* Controles y tarjeta de información */
.info-area {
    display: flex;
    flex-direction: column;
}

.phase-controls {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.phase-btn {
    padding: 0.75rem 0.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 6px;
    background-color: #e9ecef;
    color: #495057;
    transition: all 0.3s ease;
}

.phase-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px var(--shadow-color);
}

/* Estilo para el botón activo */
.phase-btn.active {
    color: white;
}
.phase-btn.active[data-phase="prodromica"] { background-color: var(--phase-prodromica); border-color: var(--phase-prodromica); }
.phase-btn.active[data-phase="progresiva"] { background-color: var(--phase-progresiva); border-color: var(--phase-progresiva); }
.phase-btn.active[data-phase="meseta"] { background-color: var(--phase-meseta); border-color: var(--phase-meseta); }
.phase-btn.active[data-phase="recuperacion"] { background-color: var(--phase-recuperacion); border-color: var(--phase-recuperacion); }


.info-card {
    background-color: var(--bg-color);
    border-left: 5px solid var(--primary-color);
    padding: 1.5rem;
    border-radius: 6px;
    min-height: 180px;
}

.info-card h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
}

.info-card p, .info-card ul {
    font-size: 0.95rem;
    margin-bottom: 0;
}
.info-card ul {
    padding-left: 1.2rem;
}

/* Sección de Diagnóstico Diferencial */
.diagnosis-tool {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.slider-container {
    width: 100%;
    max-width: 500px;
    text-align: center;
}

.slider-container label {
    font-weight: 600;
    margin-bottom: 1rem;
    display: block;
}

#slider-value {
    color: var(--primary-color);
}

.slider {
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    transition: opacity .2s;
}
.slider:hover {
    opacity: 1;
}
.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
}
.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
}

.slider-labels {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    padding: 0 10px;
    margin-top: 0.5rem;
    color: var(--secondary-color);
}

.diagnosis-result {
    width: 100%;
    max-width: 500px;
    text-align: center;
    transition: border-color 0.3s ease;
}

/* Sección de Definiciones */
.terms-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.term-card {
    background: var(--bg-color);
    padding: 1.5rem;
    border-radius: 6px;
    border-top: 4px solid var(--secondary-color);
}

.term-card h3 {
    margin-top: 0;
    font-size: 1.1rem;
}

footer {
    text-align: center;
    padding: 1.5rem;
    margin-top: 2rem;
    background-color: #e9ecef;
    color: var(--secondary-color);
    font-size: 0.9rem;
}

/* Media Queries para Responsividad */
@media (max-width: 900px) {
    .timeline-container {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 600px) {
    h1 { font-size: 1.8rem; }
    h2 { font-size: 1.5rem; }
    section { padding: 1.5rem; }
    .phase-controls { grid-template-columns: 1fr; }
}
3. Archivo main.js
JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // --- DATOS DE LAS FASES ---
    const phaseData = {
        prodromica: {
            title: "Fase 1: Prodrómica",
            description: "Precede a los síntomas neurológicos. Se caracteriza por un <strong>evento antecedente</strong> (infeccioso o no) que desencadena una respuesta inmunitaria anómala contra el sistema nervioso periférico.",
            duration: "Ocurre antes del inicio de la debilidad.",
            borderColor: "var(--phase-prodromica)",
            lineOffset: 850 // Posición en la animación de la línea
        },
        progresiva: {
            title: "Fase 2: Progresiva",
            description: "Comienza el desarrollo de la debilidad muscular progresiva. Los síntomas alcanzan su máxima severidad (el <strong>nadir clínico</strong>) típicamente en 2 semanas.",
            duration: "Por definición, no se extiende más allá de 4 semanas.",
            borderColor: "var(--phase-progresiva)",
            lineOffset: 550
        },
        meseta: {
            title: "Fase 3: Meseta (Plateau)",
            description: "Después de alcanzar el nadir, los síntomas se estabilizan y no empeoran. Durante esta fase pueden ocurrir <strong>fluctuaciones relacionadas con el tratamiento</strong>.",
            duration: "Dura de 1 a 4 semanas (mediana de 1 semana).",
            borderColor: "var(--phase-meseta)",
            lineOffset: 380
        },
        recuperacion: {
            title: "Fase 4: Recuperación",
            description: "Los síntomas comienzan a mejorar gradualmente. La recuperación puede ser completa o dejar secuelas residuales.",
            duration: "Puede durar varios meses.",
            borderColor: "var(--phase-recuperacion)",
            lineOffset: 0
        }
    };

    // --- INTERACTIVIDAD DE LAS FASES DEL SGB ---
    const phaseButtons = document.querySelectorAll('.phase-btn');
    const infoCard = document.getElementById('phase-info-card');
    const clinicalLine = document.getElementById('clinical-course-line');
    const nadirText = document.getElementById('nadir-text');

    // Función para actualizar la información y el gráfico
    function updatePhaseView(phaseKey) {
        const data = phaseData[phaseKey];

        // Actualizar tarjeta de información
        infoCard.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.description}</p>
            <ul><li><strong>Duración:</strong> ${data.duration}</li></ul>
        `;
        infoCard.style.borderColor = data.borderColor;

        // Actualizar botones activos
        phaseButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.phase === phaseKey) {
                btn.classList.add('active');
            }
        });

        // Animar la línea del gráfico
        clinicalLine.style.strokeDashoffset = data.lineOffset;
        
        // Mostrar el texto "Nadir Clínico" en las fases relevantes
        if (phaseKey === 'progresiva' || phaseKey === 'meseta') {
            nadirText.classList.remove('hidden');
        } else {
            nadirText.classList.add('hidden');
        }
    }

    // Añadir listeners a los botones
    phaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            updatePhaseView(button.dataset.phase);
        });
    });

    // Estado inicial al cargar la página
    updatePhaseView('prodromica');

    // --- INTERACTIVIDAD DEL DIAGNÓSTICO DIFERENCIAL ---
    const slider = document.getElementById('progression-slider');
    const sliderValue = document.getElementById('slider-value');
    const diagnosisCard = document.getElementById('diagnosis-card');

    // Función para actualizar la tarjeta de diagnóstico
    function updateDiagnosis() {
        const weeks = parseInt(slider.value);
        sliderValue.textContent = weeks;

        let diagnosis = {};

        if (weeks < 4) {
            diagnosis = {
                title: "AIDP (SGB Clásico)",
                description: "La progresión dura menos de 4 semanas. Se considera un curso agudo, característico del Síndrome de Guillain-Barré.",
                borderColor: "#007bff" // Azul
            };
        } else if (weeks >= 4 && weeks <= 8) {
            diagnosis = {
                title: "SIDP (Forma Subaguda)",
                description: "La progresión es de 4 a 8 semanas. Se considera una forma intermedia con riesgo de recaídas futuras.",
                borderColor: "#fd7e14" // Naranja
            };
        } else { // > 8
            diagnosis = {
                title: "CIDP (Forma Crónica)",
                description: "La progresión dura más de 8 semanas. Es una condición crónica que a menudo requiere tratamiento a largo plazo.",
                borderColor: "#dc3545" // Rojo
            };
        }

        diagnosisCard.innerHTML = `
            <h3>Diagnóstico: ${diagnosis.title}</h3>
            <p>${diagnosis.description}</p>
        `;
        diagnosisCard.style.borderColor = diagnosis.borderColor;
    }

    // Añadir listener al slider
    slider.addEventListener('input', updateDiagnosis);

    // Estado inicial del diagnóstico
    updateDiagnosis();
});

Sources







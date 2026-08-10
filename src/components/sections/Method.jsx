import {
    FaSearch,
    FaClipboardList,
    FaCogs,
    FaChartLine
} from "react-icons/fa";

function Method() {
    return (
        <section className="method" id="metodo">

            <div className="container">


                <h2 className="section-title">
                    No solo brindamos teoría.
                    <br />
                    Construimos soluciones aplicables.
                </h2>

                <div className="method-grid">

                    <div className="method-card">

                        <FaSearch className="method-icon" />

                        <h3>Diagnóstico</h3>

                        <p>
                            Analizamos la situación actual de la empresa para identificar
                            oportunidades y riesgos.
                        </p>

                    </div>

                    <div className="method-card">

                        <FaClipboardList className="method-icon" />

                        <h3>Diseño</h3>

                        <p>
                            Elaboramos una estrategia personalizada alineada con los
                            objetivos del negocio.
                        </p>

                    </div>

                    <div className="method-card">

                        <FaCogs className="method-icon" />

                        <h3>Implementación</h3>

                        <p>
                            Ejecutamos las acciones definidas junto con el equipo de la
                            empresa.
                        </p>

                    </div>

                    <div className="method-card">

                        <FaChartLine className="method-icon" />

                        <h3>Medición</h3>

                        <p>
                            Evaluamos resultados, medimos indicadores y proponemos mejoras
                            continuas.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Method;
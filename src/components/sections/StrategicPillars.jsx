import {
    FaBalanceScale,
    FaBullhorn,
    FaChartLine,
    FaUserTie,
    FaHardHat,
    FaRobot,
} from "react-icons/fa";

function StrategicPillars() {
    return (
        <section className="strategic-pillars" id="servicios">
            <div className="container">

                <span className="section-tag">
                    Nuestros Servicios
                </span>

                <h2 className="section-title">
                    Soluciones integrales para impulsar
                    el crecimiento de tu empresa
                </h2>

                <div className="pillars-grid">

                    <div className="pillar-card">

                        <FaHardHat className="pillar-icon" />

                        <h3>Seguridad y Salud en el Trabajo</h3>

                        <p>
                            Implementamos sistemas de SST para cumplir la normativa
                            y proteger a los trabajadores.
                        </p>

                    </div>

                    <div className="pillar-card">

                        <FaChartLine className="pillar-icon" />

                        <h3>Ventas</h3>

                        <p>
                            Diseñamos estrategias comerciales,
                            procesos de atención y cierre de ventas.
                        </p>

                    </div>

                    <div className="pillar-card">

                        <FaBullhorn className="pillar-icon" />

                        <h3>Marketing Empresarial</h3>

                        <p>
                            Posicionamos tu marca y fortalecemos
                            tu presencia digital.
                        </p>

                    </div>

                    <div className="pillar-card">

                        <FaUserTie className="pillar-icon" />

                        <h3>Capacitación Organizacional</h3>

                        <p>
                            Formación en liderazgo,
                            clima laboral y desarrollo del talento.
                        </p>

                    </div>

                    <div className="pillar-card">

                        <FaBalanceScale className="pillar-icon" />

                        <h3>Asesoría Jurídica</h3>

                        <p>
                            Soporte legal preventivo,
                            contratos y cumplimiento normativo.
                        </p>

                    </div>

                    <div className="pillar-card">

                        <FaRobot className="pillar-icon" />

                        <h3>Inteligencia Artificial</h3>

                        <p>
                            Implementamos herramientas de IA
                            para mejorar productividad y procesos.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default StrategicPillars;
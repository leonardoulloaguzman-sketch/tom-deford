import {
    FaRocket,
    FaChartLine,
    FaBuilding,
    FaUsers,
    FaLightbulb,
    FaRobot
} from "react-icons/fa";

function Audience() {
    return (
        <section className="audience">

            <div className="container">



                <h2 className="section-title">
                    Trabajamos con organizaciones que buscan crecer
                    de manera sostenible.
                </h2>

                <div className="audience-grid">

                    <div className="audience-card">
                        <FaRocket className="audience-icon" />
                        <h3>Empresas que inician</h3>
                        <p>Emprendimientos que necesitan una base sólida para comenzar.</p>
                    </div>

                    <div className="audience-card">
                        <FaChartLine className="audience-icon" />
                        <h3>Negocios en crecimiento</h3>
                        <p>Empresas que buscan optimizar procesos y aumentar resultados.</p>
                    </div>

                    <div className="audience-card">
                        <FaBuilding className="audience-icon" />
                        <h3>MYPES</h3>
                        <p>Organizaciones que requieren orden, estrategia y cumplimiento.</p>
                    </div>

                    <div className="audience-card">
                        <FaUsers className="audience-icon" />
                        <h3>Equipos de trabajo</h3>
                        <p>Fortalecemos liderazgo, clima laboral y productividad.</p>
                    </div>

                    <div className="audience-card">
                        <FaLightbulb className="audience-icon" />
                        <h3>Empresarios</h3>
                        <p>Acompañamos la toma de decisiones con una visión integral.</p>
                    </div>

                    <div className="audience-card">
                        <FaRobot className="audience-icon" />
                        <h3>Empresas que innovan</h3>
                        <p>Incorporamos inteligencia artificial como ventaja competitiva.</p>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Audience;
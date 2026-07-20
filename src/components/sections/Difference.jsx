import { FaCheckCircle } from "react-icons/fa";

function Difference() {
    return (
        <section className="difference">

            <div className="container difference-content">

                <div className="difference-left">

                    <span className="section-tag section-tag--light">
                        ¿Por qué elegir Tom Deford?
                    </span>

                    <h2 className="difference-title">
                        Integramos estrategia,
                        derecho, talento humano
                        y tecnología para que tu
                        empresa crezca con orden.
                    </h2>

                    <p className="difference-description">
                        No trabajamos con soluciones aisladas. Nuestro enfoque combina
                        gestión empresarial, asesoría jurídica, marketing, ventas,
                        seguridad y salud en el trabajo, desarrollo organizacional e
                        inteligencia artificial para impulsar resultados sostenibles.
                    </p>

                </div>

                <div className="difference-right">

                    <div className="difference-item">
                        <FaCheckCircle />
                        <span>Gestión empresarial y estrategia.</span>
                    </div>

                    <div className="difference-item">
                        <FaCheckCircle />
                        <span>Asesoría jurídica preventiva.</span>
                    </div>

                    <div className="difference-item">
                        <FaCheckCircle />
                        <span>Marketing y ventas.</span>
                    </div>

                    <div className="difference-item">
                        <FaCheckCircle />
                        <span>Psicología organizacional.</span>
                    </div>

                    <div className="difference-item">
                        <FaCheckCircle />
                        <span>Seguridad y Salud en el Trabajo.</span>
                    </div>

                    <div className="difference-item">
                        <FaCheckCircle />
                        <span>Inteligencia Artificial aplicada.</span>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Difference;
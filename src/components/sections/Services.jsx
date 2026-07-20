import {
    FaHardHat,
    FaChartLine,
    FaBullhorn,
    FaUserTie,
    FaBalanceScale,
    FaRobot,
    FaArrowRight
} from "react-icons/fa";

function Services() {

    const services = [
        {
            icon: FaHardHat,
            title: "Seguridad y Salud en el Trabajo",
            description:
                "Implementamos sistemas de gestión SST, elaboración de documentos, capacitaciones y acompañamiento para el cumplimiento de la normativa vigente."
        },
        {
            icon: FaChartLine,
            title: "Ventas",
            description:
                "Diseñamos estrategias comerciales, optimizamos procesos de atención y fortalecemos equipos para incrementar las ventas."
        },
        {
            icon: FaBullhorn,
            title: "Marketing Empresarial",
            description:
                "Potenciamos tu presencia digital mediante estrategias de posicionamiento, contenido y comunicación efectiva."
        },
        {
            icon: FaUserTie,
            title: "Capacitación Organizacional",
            description:
                "Desarrollamos programas de liderazgo, trabajo en equipo, atención al cliente y desarrollo del talento."
        },
        {
            icon: FaBalanceScale,
            title: "Asesoría Jurídica",
            description:
                "Brindamos soporte legal preventivo, elaboración de contratos y cumplimiento de obligaciones empresariales."
        },
        {
            icon: FaRobot,
            title: "Inteligencia Artificial",
            description:
                "Integramos herramientas de IA para automatizar procesos, optimizar recursos y mejorar la toma de decisiones."
        }
    ];

    return (
        <section className="services" id="servicios">

            <div className="container">

                <span className="section-tag">
                    Nuestros Servicios
                </span>

                <h2 className="section-title">
                    Soluciones diseñadas para impulsar
                    el crecimiento de tu organización
                </h2>

                <div className="services-grid">

                    {services.map((service) => {

                        const Icon = service.icon;

                        return (

                            <article
                                className="service-card"
                                key={service.title}
                            >

                                <div className="service-icon">

                                    <Icon />

                                </div>

                                <h3>{service.title}</h3>

                                <p>{service.description}</p>

                                <button className="service-button">

                                    Conocer más

                                    <FaArrowRight />

                                </button>

                            </article>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}

export default Services;
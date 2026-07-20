import {
    FaSearch,
    FaLightbulb,
    FaCogs,
    FaChartLine,
    FaRocket
} from "react-icons/fa";

function Transformation() {

    const steps = [
        {
            icon: FaSearch,
            title: "Diagnóstico",
            text: "Analizamos la situación actual de la empresa para identificar oportunidades y desafíos."
        },
        {
            icon: FaLightbulb,
            title: "Estrategia",
            text: "Diseñamos un plan de acción alineado con los objetivos del negocio."
        },
        {
            icon: FaCogs,
            title: "Implementación",
            text: "Ejecutamos las acciones necesarias junto con el equipo de trabajo."
        },
        {
            icon: FaChartLine,
            title: "Seguimiento",
            text: "Medimos indicadores y realizamos mejoras continuas."
        },
        {
            icon: FaRocket,
            title: "Crecimiento",
            text: "La empresa consolida procesos, incrementa productividad y fortalece su competitividad."
        }
    ];

    return (
        <section className="transform">

            <div className="container">

                <span className="section-tag">
                    Transformación Empresarial
                </span>

                <h2 className="section-title">
                    Acompañamos cada etapa del crecimiento
                    de tu organización
                </h2>

                <div className="timeline">

                    {steps.map((step, index) => {

                        const Icon = step.icon;

                        return (

                            <div
                                className="timeline-item"
                                key={step.title}
                            >

                                <div className="timeline-circle">

                                    <Icon />

                                </div>

                                <h3>{step.title}</h3>

                                <p>{step.text}</p>

                                {index !== steps.length - 1 && (
                                    <div className="timeline-line"></div>
                                )}

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}

export default Transformation;

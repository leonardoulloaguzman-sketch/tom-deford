import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
    return (
        <section className="contact" id="contacto">

            <div className="container contact-content">

                <div className="contact-info">

                    <span className="section-tag">
                        Contacto
                    </span>

                    <h2 className="section-title">
                        Conversemos sobre el crecimiento de tu empresa
                    </h2>

                    <p className="contact-description">
                        Cuéntanos cuáles son los desafíos de tu organización.
                        Nuestro equipo analizará tu situación y te propondrá
                        una estrategia adaptada a tus objetivos.
                    </p>

                    <div className="contact-item">
                        <FaPhoneAlt />
                        <span>+51 999 999 999</span>
                    </div>

                    <div className="contact-item">
                        <FaEnvelope />
                        <span>contacto@tomdeford.com</span>
                    </div>

                    <div className="contact-item">
                        <FaMapMarkerAlt />
                        <span>Arequipa, Perú</span>
                    </div>

                </div>

                <form className="contact-form">

                    <input
                        type="text"
                        placeholder="Nombre completo"
                    />

                    <input
                        type="email"
                        placeholder="Correo electrónico"
                    />

                    <input
                        type="text"
                        placeholder="Empresa"
                    />

                    <textarea
                        rows="6"
                        placeholder="¿Cómo podemos ayudarte?"
                    />

                    <button
                        className="btn-primary"
                        type="submit"
                    >
                        Enviar consulta
                    </button>

                </form>

            </div>

        </section>
    );
}

export default Contact;
import { useState } from "react";

import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";

function Contact() {

    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        empresa: "",
        mensaje: "",
    });

    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setSending(true);
        setSent(false);

        try {

            await emailjs.send(
    "service_ibm9cu6",
    "template_mpjj5oc",
    {
        name: formData.nombre,
        email: formData.email,
        company: formData.empresa,
        message: formData.mensaje,
        title: "Nueva consulta desde el sitio web",
    },
    "iBv3Y5kJ8VlTUVE82"
);

            setSent(true);

            setFormData({
                nombre: "",
                email: "",
                empresa: "",
                mensaje: "",
            });

        } catch (error) {

            console.error("Error al enviar el correo:", error);

            alert(
                "No se pudo enviar la consulta. Inténtalo nuevamente."
            );

        } finally {

            setSending(false);

        }

    };

    return (
        <section className="contact" id="contact">

            <div className="container contact-content">

                <div className="contact-info">

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
                        <span>Lima, Perú</span>
                    </div>

                </div>

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre completo"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="empresa"
                        placeholder="Empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                    />

                    <textarea
                        rows="6"
                        name="mensaje"
                        placeholder="¿Cómo podemos ayudarte?"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                    />

                    <button
                        className="btn-primary"
                        type="submit"
                        disabled={sending}
                    >
                        {sending ? "Enviando..." : "Enviar consulta"}
                    </button>

                    {sent && (
                        <p className="contact-success">
                            ✓ Consulta enviada correctamente.
                            Nos pondremos en contacto contigo.
                        </p>
                    )}

                </form>

            </div>

        </section>
    );
}

export default Contact;
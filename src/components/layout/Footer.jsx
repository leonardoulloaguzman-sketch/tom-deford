import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            <div className="container">

                <div className="footer-grid">

                    <div>

                        <h3 className="footer-logo">
                            Tom Deford
                        </h3>

                        <p>
                            Consultoría empresarial orientada al crecimiento,
                            la innovación y la transformación organizacional.
                        </p>

                        <div className="social-links">

                            <a href="#">
                                <FaFacebookF />
                            </a>

                            <a href="#">
                                <FaLinkedinIn />
                            </a>

                            <a href="#">
                                <FaInstagram />
                            </a>

                        </div>

                    </div>

                    <div>

                        <h4>Empresa</h4>

                        <ul>

                            <li><a href="#inicio">Inicio</a></li>

                            <li><a href="#nosotros">Nosotros</a></li>

                            <li><a href="#servicios">Servicios</a></li>

                            <li><a href="#contacto">Contacto</a></li>

                        </ul>

                    </div>

                    <div>

                        <h4>Servicios</h4>

                        <ul>

                            <li>Seguridad y Salud</li>

                            <li>Marketing</li>

                            <li>Ventas</li>

                            <li>Asesoría Jurídica</li>

                            <li>Inteligencia Artificial</li>

                        </ul>

                    </div>

                    <div>

                        <h4>Contacto</h4>

                        <ul>

                            <li>📍 Lima, Perú</li>

                            <li>📞 +51 999 999 999</li>

                            <li>✉ contacto@tomdeford.com</li>

                        </ul>

                    </div>

                </div>

                <div className="footer-bottom">

                    © 2026 Tom Deford. Todos los derechos reservados.

                </div>

            </div>

        </footer>
    );
}

export default Footer;
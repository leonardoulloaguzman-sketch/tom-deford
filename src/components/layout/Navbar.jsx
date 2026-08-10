import "./Navbar.scss";
import logo from "../../assets/images/td.jpeg";

function Navbar() {
    return (
        <header className="navbar">
            <div className="container">

                <div className="navbar__logo">
                    <img src={logo} alt="Tom Deford" />
                </div>

                <nav className="navbar__menu">
                    <a href="#inicio">Inicio</a>
                    <a href="#nosotros">Nosotros</a>
                    <a href="#servicios">Servicios</a>
                    <a href="#metodo">Método</a>
                    <a href="#diferenciacion">Diferenciación</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contacto</a>
                </nav>

                <button className="navbar__button">
                    <a href="#contact">Diagnóstico</a>
                </button>

            </div>
        </header>
    );
}

export default Navbar;
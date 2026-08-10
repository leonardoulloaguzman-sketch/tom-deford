import "./Hero.scss";
import heroImg from "../../assets/hero.jpg"; 

function Hero() {
    return (
        <section className="hero" id="inicio">

            <div className="hero__content">



                <h1>
                    Transformamos empresas con estrategia,
                    liderazgo y protección integral.
                </h1>

                <p>
                    En Tom Deford ayudamos a empresarios y organizaciones a crecer con
                    seguridad jurídica, marketing estratégico, ventas, desarrollo
                    organizacional y seguridad y salud en el trabajo.
                </p>

                <div className="hero__buttons">
                    <a
                        href="https://wa.me/51987654321?text=Hola,%20quisiera%20solicitar%20un%20diagnóstico%20para%20mi%20empresa."
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Solicitar diagnóstico
                    </a>

                    <a href="#servicios" className="btn secondary">
                        Ver servicios
                    </a>
                </div>

            </div>

            <div className="hero__image">
                <img src={heroImg} alt="Consultoría empresarial" />
            </div>

        </section>
    );
}

export default Hero;
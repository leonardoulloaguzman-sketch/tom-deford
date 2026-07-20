import {
    FaArrowRight,
    FaHardHat,
    FaChartLine,
    FaUsers,
} from "react-icons/fa";

function Blog() {
    const posts = [
        {
            icon: FaHardHat,
            category: "Seguridad y Salud en el Trabajo",
            title: "Cómo implementar un Sistema de Gestión SST en una MYPE",
            description:
                "Conoce los primeros pasos para cumplir la normativa y proteger a tus trabajadores.",
        },
        {
            icon: FaChartLine,
            category: "Ventas",
            title: "5 estrategias para aumentar las ventas de tu empresa",
            description:
                "Descubre acciones prácticas para fortalecer tu proceso comercial y captar más clientes.",
        },
        {
            icon: FaUsers,
            category: "Gestión Organizacional",
            title: "El liderazgo como motor del crecimiento empresarial",
            description:
                "Aprende cómo desarrollar equipos comprometidos y preparados para los nuevos desafíos.",
        },
    ];

    return (
        <section className="blog" id="blog">
            <div className="container">

                <span className="section-tag">
                    Blog Empresarial
                </span>

                <h2 className="section-title">
                    Compartimos conocimiento para impulsar
                    el crecimiento de tu empresa
                </h2>

                <div className="blog-grid">

                    {posts.map((post) => {

                        const Icon = post.icon;

                        return (
                            <article
                                className="blog-card"
                                key={post.title}
                            >

                                <div className="blog-image">

                                    <Icon />

                                </div>

                                <span className="blog-category">
                                    {post.category}
                                </span>

                                <h3>{post.title}</h3>

                                <p>{post.description}</p>

                                <button className="blog-button">

                                    Leer artículo

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

export default Blog;
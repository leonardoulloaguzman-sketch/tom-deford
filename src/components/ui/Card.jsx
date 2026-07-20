function Card({ icon: Icon, title, description }) {
    return (
        <div className="pillar-card">

            <Icon className="pillar-icon" />

            <h3>{title}</h3>

            <p>{description}</p>

        </div>
    );
}

export default Card;
import "./Hero.css";

export default function Hero({ data }) {
  return (
    <section id="about" className="hero-section">
      <div className="hero-content">
        <img
          src={data.profileImage}
          alt={data.imageAlt}
          className="hero-avatar"
          style={{ width: data.imageSize, height: data.imageSize }}
        />

        <h1 className="hero-heading">
          {data.greeting} {data.name}.<br />
          <span className="hero-heading-sub">{data.headline}</span>
        </h1>

        <p className="hero-subtext">{data.role}</p>
        <p className="hero-description">{data.description}</p>

        <div className="hero-button-group">
          <a href={data.primaryButtonLink} className="hero-primary-button">
            {data.primaryButtonText}
          </a>
          <a href={data.secondaryButtonLink} className="hero-secondary-button">
            {data.secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
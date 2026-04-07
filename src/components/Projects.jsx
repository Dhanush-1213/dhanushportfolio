import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import useReveal from "../hooks/useReveal";

export default function Projects({ projects }) {
  const [revealRef, isVisible] = useReveal();

  const handleCardClick = (github) => {
    if (window.innerWidth <= 768 && github) {
      window.open(github, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div
        ref={revealRef}
        className={`projects-container reveal-content ${isVisible ? "active" : ""}`}
      >
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">
            Things I have built — from distributed systems to AI-powered applications.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => handleCardClick(project.github)}
            >
              <div className="card-glow"></div>

              <div className="card-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="card-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-image"
                />
                <div className="card-image-overlay"></div>
                <div className="card-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="card-action-btn github"
                    aria-label="View Github Repository"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub />
                  </a>
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="card-action-btn live"
                      aria-label="View Live Demo"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>

                {project.tags && project.tags.length > 0 && (
                  <div className="card-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="card-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
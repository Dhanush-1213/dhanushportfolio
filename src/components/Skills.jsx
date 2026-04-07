import "./Skills.css";
import useReveal from "../hooks/useReveal";

export default function Skills() {
  const [revealRef, isVisible] = useReveal();
  const timelineData = [
    {
      year: "2018 – 2019",
      title: "School",
      subtitle: "Jnanavardhaka Vidya Mandira, Chelur",
      status: "",
    },
    {
      year: "2019 – 2021",
      title: "PU College",
      subtitle: "Mahesh Pre-University College, Tumkur",
      status: "",
    },
    {
      year: "2022 – 2026",
      title: "B.Tech CSE (AI & ML)",
      subtitle: "PES University",
      status: "highlight",
    },
    {
      year: "Present",
      title: "Internship",
      subtitle: "Intern @ PI Labs | PES University",
      status: "current",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div 
        ref={revealRef} 
        className={`skills-container reveal-content ${isVisible ? "active" : ""}`}
      >
        <h2 className="skills-heading center">Technologies</h2>

        {/* ICONS */}
        <div className="skills-icons">
          <a href="https://www.python.org/" target="_blank" rel="noreferrer">
            <img src="https://techstack-generator.vercel.app/python-icon.svg" alt="Python" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
            <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="JavaScript" />
          </a>
          <a href="https://react.dev/" target="_blank" rel="noreferrer">
            <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="React" />
          </a>
          <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
          </a>
          <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI" />
          </a>
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
            <img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="MySQL" />
          </a>
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
          </a>
          <a href="https://www.tensorflow.org/" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />
          </a>
          <a href="https://pytorch.org/" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" />
          </a>
          <a href="https://pandas.pydata.org/" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" />
          </a>
          <a href="https://numpy.org/" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy" />
          </a>
          <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
            <img src="https://techstack-generator.vercel.app/docker-icon.svg" alt="Docker" />
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
          </a>
          <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" />
          </a>
        </div>

        {/* TIMELINE */}
        <div className="skills-about-block timeline-minimal-block">
          <div className="timeline-header">
            <h2 className="skills-heading">Journey</h2>
            
          </div>

          <div className="timeline-minimal">
            <div className="timeline-minimal-line"></div>

            {timelineData.map((item, index) => (
              <div className="timeline-minimal-item" key={index}>
                <div
                  className={`timeline-minimal-dot ${
                    item.status === "highlight"
                      ? "highlight"
                      : item.status === "current"
                      ? "current"
                      : ""
                  }`}
                ></div>

                <div className="timeline-minimal-content">
                  <span className="timeline-minimal-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
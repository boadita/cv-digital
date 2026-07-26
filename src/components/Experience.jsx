import { experiences } from "../data/experienceData";
import "../Experience.css";

function Experience() {
  return (
    <section className="experience-section">
      <h1>EXPERIENCIA PROFESIONAL</h1>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">

            <span className="period">
              {exp.period}
            </span>

            <h3>{exp.position}</h3>

            <h4>{exp.company}</h4>

            <ul>
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>

            <div className="tech-stack">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
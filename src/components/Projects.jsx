import { projects } from "../data/projects";
import "../Experience.css";

function Projects() {
    return (
        <section className="experience-section">
            <h1>PROYECTOS</h1>

            <div className="timeline">
                {projects.map((pr, index) => (
                    <div key={index} className="experience-card">

                        <h3>{pr.titulo}</h3>

                        <p>{pr.descripcion}</p>

                        <div className="tech-stack">
                            {pr.tecnologias.map((tech, i) => (
                                <span key={i} className="tech-badge">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <br />
                        <a
                            className="link"
                            href={pr.enlace_github}
                            target="_blank"
                        >
                            GitHub
                        </a>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
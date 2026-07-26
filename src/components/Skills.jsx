import { skills } from "../data/skills";

const Skills = () => {
  return (
    <div className="contenedor">
      <h1>TECNOLOGÍAS</h1>

      {Object.entries(skills).map(([category, techs]) => (
        <div className="categoria" key={category}>
          <h2>{category.replace(/_/g, ' ').replace(/\b\w/g, letra => letra.toUpperCase())}</h2>

          <div className="tecnologias-grid">
            {techs.map((tech) => (
              <div className="tech-card" key={tech.name}>
                <img
                  src={`/IMAGENES/TECNOLOGIAS/${tech.image}.png`}
                  alt={tech.name}
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
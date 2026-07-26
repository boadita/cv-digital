import { education } from "../data/education";
import { languages } from "../data/languages";

const Education = () => {

    return (
        <section className="contenedor">
            <h1>FORMACIÓN ACADÉMICA</h1>

            {
                <div className="academic-grid">
                    {education.map((item) => (
                        <div className="academic-card">
                            <article key={item.id}>
                                <h3>{item.title}</h3>

                                <p>Institución: <span>{item.institution}</span></p>
                                <p>Nivel: <span>{item.level}</span></p>
                                <p>Tipo de educación: <span>{item.type}</span></p>
                                <p>Localidad: <span>{item.location}</span></p>

                                <span>{item.year}</span>
                            </article>
                        </div>
                    ))}

                </div>
            }
            <br />

            <h2>IDIOMAS</h2>

            <div className="academic-grid">

                {
                    languages.map(lg => (
                        <div className="academic-card">
                            <article key={lg.id}>
                                <h3>{lg.flag} {lg.language}</h3>
                                <p>Nivel: <span>{lg.level}</span></p>
                            </article>
                        </div>
                    ))
                }

            </div>

        </section>
    );

}

export default Education;
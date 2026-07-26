import { docencia } from "../data/docencia";

const Docencia = () => {
    return (
        <div className="contenedor">
            <h1>DOCENCIA UNIVERSITARIA</h1>
            <p>
                Experiencia impartiendo asignaturas relacionadas con
                programación, bases de datos, ingeniería de software y
                matemáticas.
            </p>

            {Object.entries(docencia).map(([universidad, materias]) => (
                <div className="categoria" key={universidad}>
                    <h2>{universidad}</h2>

                    <div className="materias-grid">
                        {materias.map((materia) => (
                            <div className="materias-card">
                                <img
                                    src={`/IMAGENES/MATERIAS/${materia.nombre.normalize("NFD").toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}.png`}
                                    alt={materia.nombre}
                                />
                                <span>{materia.nombre}</span>
                                <p className="descripcion">{materia.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Docencia;
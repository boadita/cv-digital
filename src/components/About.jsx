import React from 'react';

const About = () => {
    return (
        <div className="contenedor">
            <div className='contacto'>
                <h1>SOBRE MI</h1>
                {/* Sección superior */}
                <div className="paneles">

                    <p>
                        Ingeniero de Sistemas con experiencia en desarrollo de software, aplicaciones web y móviles, bases de datos y sistemas empresariales.
                    </p>

                    <p>
                        Especializado en Angular, React, PHP, Laravel, Python, Kotlin y SQL, con capacidad para participar en todas las etapas del desarrollo de software, desde el análisis y diseño hasta la implementación y mantenimiento.
                    </p>

                    <p>
                        Complemento mi experiencia técnica con actividades de docencia universitaria y capacitación, promoviendo el aprendizaje y la aplicación práctica de la tecnología.
                    </p>

                </div>

                <div className="imagenes">
                    <img src="IMAGENES/sobre_mi.png" alt='Sobre Mi' />
                </div>
            </div>
        </div>
    );
};

export default About;
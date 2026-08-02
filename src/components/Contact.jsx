const Contact = () => {
    return (
        <div className="contenedor">
            <div className="contacto">
                <h1>CONTACTO</h1>
                <div className="paneles">
                    <h2>¿List@ para comenzar un proyecto?</h2>
                    <p>Me apasiona desarrollar soluciones tecnológicas que aporten valor a empresas, instituciones y emprendedores.</p>
                    <p>Actualmente estoy disponible para colaborar en proyectos nacionales e internacionales.</p>
                    <ul>
                        <li>Trabajo Remoto</li>
                        <li>Desarrollo Web Full Stack</li>
                        <li>Desarrollo Mobile</li>
                        <li>Bases de Datos</li>
                        <li>Consultorías</li>
                        <li>Docencia Universitaria</li>
                    </ul>

                    <a
                        className="link"
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CV Completo
                    </a>
                    <a
                        className="link"
                        href="/CV_Resumido.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CV Resumido
                    </a>
                </div>
                <br />
                <section className="tecnologias-grid">

                    <div className="info-card">
                        <a href="mailto:sboadam@gmail.com">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                        <span>Email</span>
                    </div>
                    <div className="info-card">
                        <a href="https://wa.me/59170532651"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <span>Whatsapp</span>
                    </div>
                    <div className="info-card">
                        <a href="https://bo.linkedin.com/in/sergio-mario-boada-miranda-89a6a156">
                            <i className="fa-brands fa-linkedin fa-canvas-square"></i>
                        </a>
                        <span>LinkedIn</span>
                    </div>
                    <div className="info-card">
                        <a href="https://github.com/boadita"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="fa-brands fa-github fa-canvas-square"></i>
                        </a>
                        <span>Github</span>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Contact;
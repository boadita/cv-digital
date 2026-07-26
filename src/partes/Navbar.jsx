const Navbar = () => {

    return (
        <nav className="menu">
            <div className="opciones">
                <ul className="lista">
                    <li><a href="/">Sobre mi</a></li>
                    <li><a href="/tecnologias">Tecnologías</a></li>
                    <li><a href="/experiencia">Experiencia Profesional</a></li>
                    <li><a href="/docencia">Docencia</a></li>
                    <li><a href="/proyectos">Proyectos</a></li>
                    <li><a href="/educacion">Educación</a></li>
                    <li><a href="/certificaciones">Certificaciones</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </div>
        </nav>

    );
};

export default Navbar;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Docencia from "./components/Docencia";
import Projects from "./components/Projects";
import Education from "./components/Education";
import MainCertifications from "./components/MainCertifications";
import CompleteCertifications from "./components/CompleteCertifications";
import Contact from "./components/Contact";
import Header from "./partes/Header";
import Navbar from "./partes/Navbar";
import Footer from "./partes/Footer";
import './estilos.css';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/tecnologias" element={<Skills />} />
          <Route path="/experiencia" element={<Experience />} />
          <Route path="/docencia" element={<Docencia />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/educacion" element={<Education />} />
          <Route path="/certificaciones" element={<MainCertifications />} />
          <Route path="/complete_certifications" element={<CompleteCertifications />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </Router>

  );
}

export default App;
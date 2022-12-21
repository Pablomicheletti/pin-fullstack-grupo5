import { useRef } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Form from "./components/Form/Form"
import Footer from "./components/layouts/Footer"
import About from "./components/About"
import Carusel from "./components/Carusel"

function App() {
  const about = useRef(null);
  const carusel = useRef(null);
  const forms = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <ScrollToTop />
     
      <div className="hero">
       
        <ul>
          <div className="nav-div">
          <li onClick={() => scrollToSection(about)} className="link">
            Nosotros
          </li>
            <li onClick={() => scrollToSection(carusel)} className="link">
            Que hacer?
            </li>
          <li onClick={() => scrollToSection(forms)} className="link">
            Contacto
          </li>
          </div>
        </ul>
          <div className="cataratas">
            <h1 className="Slide_Slogan">
            <img alt="fondo" src="https://iguazuargentina.com/images/cabeceras/slides_slogan.svg"/>
          </h1>
        </div>
      </div>
     <div ref={about} className="About">
        <About />
      </div>
      <div ref={carusel} className="Carrousel">
        <Carusel />
      </div>
      <div ref={forms} className="forms">
        <Form />
      </div>

      <div ref={Footer} className="footer">
        <Footer/>
      </div>


    </div>
   
  );
}

export default App;


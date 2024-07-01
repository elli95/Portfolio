import NavBar from "../NavBar";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Projects from "../../pages/Projects";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Elise Marie Hogsnes - Portfolio";
  }, []);

  return (
    <div className="bg-gradient-to-t from-linear-gradient-right to-linear-gradient-left">
      <NavBar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;

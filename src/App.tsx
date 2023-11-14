import "./app.scss";
import AboutMe from "./components/aboutMe/AboutMe";
import Ceritficates from "./components/certificates/Ceritificates";
import { Home } from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Home />
      </section>
      <section id="About">
        <AboutMe />
      </section>
      <section>
        <Parallax text="Ceritficates" color="dark" />
      </section>
      <section id="Certificates">
        <Ceritficates />
      </section>
      <section>
        <Parallax text="Projects" color="light" />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Contacts">Contact</section>
    </div>
  );
}

export default App;

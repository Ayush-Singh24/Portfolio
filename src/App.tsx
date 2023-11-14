import "./app.scss";
import AboutMe from "./components/aboutMe/AboutMe";
import { Home } from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

function App() {
  return (
    <div>
      <section>
        <Navbar />
        <Home />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <Parallax text="Ceritficates" color="dark" />
      </section>
      <section>
        <Parallax text="Projects" color="light" />
      </section>
      <section>Portfolio</section>
      <section>Portfolio</section>
    </div>
  );
}

export default App;

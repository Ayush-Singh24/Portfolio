import "./app.scss";
import { Home } from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <section>
        <Navbar />
        <Home />
      </section>
      <section>parallax</section>
      <section>services</section>
      <section>Portfolio</section>
      <section>Portfolio</section>
      <section>Portfolio</section>
    </div>
  );
}

export default App;

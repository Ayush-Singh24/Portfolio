import "./home.scss";
export function Home() {
  return (
    <div className="home">
      <div className="wrapper">
        <div className="textContainer">
          <h2>AYUSH SINGH</h2>
          <h1>Web developer and UI designer</h1>
          <div className="buttons">
            <button>See the latest projects</button>
            <button>Contact</button>
          </div>
        </div>
        <div className="imageContainer">
          <img src="/images/ayush.png" alt="profile" />
        </div>
      </div>
    </div>
  );
}

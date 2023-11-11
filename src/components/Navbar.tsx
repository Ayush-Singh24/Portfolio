import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <span>Ayush Singh</span>
        <a href="https://github.com/Ayush-Singh24">
          <img src="/images/github.png" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/ayush-singh-639112275/">
          <img src="/images/linkedin.png" alt="linkedin" />
        </a>
        <a href="https://www.instagram.com/ayush.singh.24/">
          <img src="/images/instagram.png" alt="instagram" />
        </a>
      </div>
    </div>
  );
}

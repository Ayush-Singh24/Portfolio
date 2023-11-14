import "./contact.scss";
export default function Contact() {
  return (
    <div className="contact">
      <div className="wrapper">
        <div className="container">
          <h2>Get in Touch</h2>
          <h1>Contact Me</h1>
          <div className="socials">
            <div className="mail">
              <img src="/images/mail.png" alt="mail" />
              <span className="linkText">asayushsingh80@gmail.com</span>
            </div>
            <div className="linkContainer">
              <a href="https://github.com/Ayush-Singh24" className="link">
                <img src="/images/github.png" alt="mail" />
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-singh-639112275/"
                className="link"
              >
                <img src="/images/linkedin.png" alt="mail" />
              </a>
              <a
                href="https://www.hackerrank.com/profile/as6402"
                className="link"
              >
                <img src="/images/hackerrank.png" alt="mail" />
              </a>
            </div>
          </div>
        </div>
        <span className="copyright">
          Copyright © 2023 Ayush Singh. All Rights Reserved.
        </span>
      </div>
    </div>
  );
}

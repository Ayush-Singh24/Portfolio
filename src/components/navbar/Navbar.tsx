import "./navbar.scss";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ayush Singh
        </motion.span>
        <div className="socials">
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
    </div>
  );
}

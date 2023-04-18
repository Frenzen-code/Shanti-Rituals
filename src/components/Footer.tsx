import React from "react";
import "./Footer.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer>
      <div className="social-media">
        <a href="https://www.facebook.com/ShantiRituals">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

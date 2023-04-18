import React, { useState, useEffect } from "react";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface Props {}

const Header: React.FC<Props> = () => {
  const [showNav, setShowNav] = useState(false);

  // useEffect(() => {
  //   const header = document.querySelector(".sticky-header") as HTMLElement;
  //   setTimeout(() => {
  //     header.classList.add("show-header");
  //   }, 500);
  // }, []);

  const handleLinkClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBurgerClick = () => {
    setShowNav(!showNav);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      header.classList.add("slide");
    }
  }, []);

  return (
    <header className="sticky-header">
      <div className="logo" onClick={handleLogoClick}>
        <img
          src="src/assets/lotus-flower-svgrepo-com.svg"
          alt="Shanti Rituals"
        />
        <h1 className="logo-text">Shanti Rituals</h1>
      </div>
      <button className="burger" onClick={handleBurgerClick}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav className={showNav ? "show" : ""}>
        <ul>
          <li>
            <button onClick={() => handleLinkClick("about")}>A propos</button>
          </li>
          <li>
            <button onClick={() => handleLinkClick("soins")}>Soins</button>
          </li>
          <li>
            <button onClick={() => handleLinkClick("book")}>Réservez</button>
          </li>
          <li>
            <button onClick={() => handleLinkClick("contact")}>
              Contactez-moi
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

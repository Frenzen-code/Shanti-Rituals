import React from "react";
import "./Presentation.scss";

interface Props {}

const Presentation: React.FC<Props> = () => {
  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="logo">Shanti Rituals</h1>
        <p className="slogan">Find your inner peace</p>
      </div>
    </div>
  );
};

export default Presentation;

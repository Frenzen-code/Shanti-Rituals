import React from "react";
import "./MainSection.scss";
import BookForm from "../components/BookForm";
import MultiCarousel from "./MultiCarousel";

interface Props {}

const MainSection: React.FC<Props> = () => {
  return (
    <main>
      <div className="content">
        <h1>Bienvenue à Shanti Rituals</h1>
        <p>
          We offer a variety of wellness services to help you relax, rejuvenate,
          and find inner peace.
        </p>
      </div>
      <section id="soins">
        <MultiCarousel />
      </section>
      <section className="flex" id="about">
        <h2>A propos de moi</h2>
        <p>
          We are a team of experienced wellness professionals dedicated to
          helping you achieve your health and wellness goals.
        </p>
      </section>
      <section className="flex" id="contact">
        <h2>Contactez-moi</h2>
        <p>
          Get in touch with us today to schedule an appointment or learn more
          about our services.
        </p>
      </section>
      <section className="flex" id="book">
        <h2>Prenez rendez-vous</h2>
        <p>
          Ready to take the next step on your wellness journey? Book an
          appointment with us today.
        </p>
        <BookForm />
      </section>
    </main>
  );
};

export default MainSection;

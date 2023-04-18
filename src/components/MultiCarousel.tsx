import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "../models/soins";
import soins from "../data";
import "./MultiCarousel.scss";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function MultiCarousel() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index: any) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="multi-carousel">
      <Carousel responsive={responsive}>
        {soins.map((item: CarouselItem, index) => (
          <div
            key={item.title}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img className="card-image" src={item.imageUrl} alt={item.title} />
            <h3 className="card-title">{item.title}</h3>
            <p
              className={`card-description ${
                hoveredItem === index ? "show" : ""
              }`}
            >
              {item.description}
            </p>
            <p className="card-price">{item.price}</p>
            <p className="card-duration">{item.duration}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

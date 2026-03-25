import React, { useState, useEffect } from "react";
import "./Carousel.scss";

const images = [
  "/img/carouselImg/pic1.jpg",
  "/img/carouselImg/pic2.jpg"
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="carousel">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={index === currentIndex ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default Carousel;
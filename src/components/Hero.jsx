import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../assets/slider1.png";
import img2 from "../assets/slider2.png";
import img3 from "../assets/slider3.png";
import img4 from "../assets/slider4.png";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="h-50">
      {/* <div className="darken-img"></div> */}
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <div className="dark-overlay"></div>
        <Carousel.Caption>
          <h2>Call For Justice!</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="First slide" />
        <div className="dark-overlay"></div>
        <Carousel.Caption>
          <h2>Go Green!</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="First slide" />
        <div className="dark-overlay"></div>
        <Carousel.Caption>
          <h2>Save Our Sons!</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="First slide" />
        <div className="dark-overlay"></div>
        <Carousel.Caption>
          <h2>End Racism!</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;

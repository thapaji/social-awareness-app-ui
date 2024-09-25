import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { CommonCards } from "./CommonCards";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  const causes = useSelector((state) => state.causes.causes);
  const events = useSelector((state) => state.events.events);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Row className="mb-4">
        <h3 className="text-center mb-4">{causes[0].title}</h3>
        <h5 className="text-dark">Cause Created By: {causes[0].createdBy}</h5>
        <Col>
          <img src={causes[0].image} alt={causes[0].title} />
        </Col>
        <Link to={"/need-support/awarness/" + causes[0]._id}>
          <Button className="mt-4">Learn More and Participate</Button>
        </Link>
        <hr className="mt-4" />
      </Row>
      <Row>
        <Col>
          <h3 className="text-center mb-4">
            {events[0].title.length > 30 ? events[0].title.slice(0, 30) + ".." : events[0].title}
          </h3>
          <h5 className="text-dark">Event Created By: {events[0].createdBy}</h5>
          <Col>
            <img src={events[0].image} alt={events[0].title} style={{ height: "35vh" }} />
          </Col>
          <Link to={"/need-support/events/" + events[0]._id}>
            <Button className="mt-4">Learn More and Attend Event</Button>
          </Link>
        </Col>
        <Col>
          <h3 className="text-center mb-4">{events[1].title}</h3>
          <h5 className="text-dark">Event Created By: {events[1].createdBy}</h5>
          <Col>
            <img src={events[1].image} alt={events[1].title} style={{ height: "35vh" }} />
          </Col>
          <Link to={"/need-support/events/" + events[1]._id}>
            <Button className="mt-4">Learn More and Attend Event</Button>
          </Link>
        </Col>
        <hr className="mt-4" />
      </Row>
    </>
  );
  // <Carousel activeIndex={index} onSelect={handleSelect}>
  //   {/* <div className="darken-img"></div> */}
  //   <Carousel.Item>
  //     <img className="d-block w-100" src={img1} alt="First slide" />
  //     <div className="dark-overlay"></div>
  //     <Carousel.Caption>
  //       <h2>Call For Justice!</h2>
  //     </Carousel.Caption>
  //   </Carousel.Item>
  //   <Carousel.Item>
  //     <img className="d-block w-100" src={img2} alt="First slide" />
  //     <div className="dark-overlay"></div>
  //     <Carousel.Caption>
  //       <h2>Go Green!</h2>
  //     </Carousel.Caption>
  //   </Carousel.Item>
  //   <Carousel.Item>
  //     <img className="d-block w-100" src={img3} alt="First slide" />
  //     <div className="dark-overlay"></div>
  //     <Carousel.Caption>
  //       <h2>Save Our Sons!</h2>
  //     </Carousel.Caption>
  //   </Carousel.Item>
  //   <Carousel.Item>
  //     <img className="d-block w-100" src={img4} alt="First slide" />
  //     <div className="dark-overlay"></div>
  //     <Carousel.Caption>
  //       <h2>End Racism!</h2>
  //     </Carousel.Caption>
  //   </Carousel.Item>
  // </Carousel>
};

export default Hero;

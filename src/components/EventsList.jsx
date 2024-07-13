import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import run from "../assets/run.jpg";

export const EventsList = () => {
  return (
    <>
      <h1>Recent Causes</h1>
      <hr />
      <Row>
        <Col>
          <Row>
            <h2>City To Surf</h2>
          </Row>
          <Row>
            <p>
              The City2Surf serves multiple purposes: it promotes physical fitness and community
              engagement, provides a platform for fundraising for various charities, and offers
              participants the opportunity to enjoy a scenic race route from Sydney's city center to
              Bondi Beach.
            </p>
          </Row>
          <Row>
            <Button className="bg-grey rounded">Find out more...</Button>
          </Row>
        </Col>
        <Col>
          {" "}
          <img src={run} alt="event" width={"20vw"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <h2>City To Surf</h2>
          </Row>
          <Row>
            <p>
              The City2Surf serves multiple purposes: it promotes physical fitness and community
              engagement, provides a platform for fundraising for various charities, and offers
              participants the opportunity to enjoy a scenic race route from Sydney's city center to
              Bondi Beach.
            </p>
          </Row>
          <Row>
            <Button className="bg-grey rounded">Find out more...</Button>
          </Row>
        </Col>
        <Col>
          {" "}
          <img src={run} alt="event" width={"20vw"} />
        </Col>
      </Row>
    </>
  );
};

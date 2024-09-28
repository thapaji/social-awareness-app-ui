import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { Status } from "../pages/user/Status";
import { EventStatus } from "../pages/user/EventStatus";
import { useUser } from "@clerk/clerk-react";
import AdvertStatus from "../pages/user/AdvertStatus";

const Hero = () => {
  const causes = useSelector((state) => state.causes.causes);
  const events = useSelector((state) => state.events.events);
  const { user } = useUser();

  return (
    <>
      {user?.id && (
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Create New Cause +</Accordion.Header>
            <Accordion.Body>
              <Status />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}

      <Row className="my-4">
        <h3 className="text-center mb-4">{causes[0]?.title}</h3>
        <h5 className="text-dark">Cause Created By: {causes[0]?.createdBy}</h5>
        <Col>
          <img src={causes[0]?.image} alt={causes[0]?.title} />
        </Col>
        <Link to={"/need-support/awarness/" + causes[0]?._id}>
          <Button className="mt-4">Learn More and Participate</Button>
        </Link>
        <hr className="mt-4" />
      </Row>

      <Row>
        {user?.id && (
          <Accordion>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Create New Event +</Accordion.Header>
              <Accordion.Body>
                <EventStatus />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}
        <Col>
          <h3 className="text-center my-4">
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
      <Row>
        {user?.id && (
          <Accordion>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Create New Advertisement +</Accordion.Header>
              <Accordion.Body>
                <AdvertStatus />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}
      </Row>
    </>
  );
};

export default Hero;

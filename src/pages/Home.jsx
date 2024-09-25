import React from "react";
import { UserLayout } from "../components/layouts/UserLayout";
import { Col, Container, Row } from "react-bootstrap";
import { EventsList } from "../components/EventsList";
import Hero from "../components/Hero";
import { CausesList } from "../components/CausesList";
import { Advertisements } from "./business/Advertisements";

const Home = () => {
  return (
    <UserLayout>
      <Container className="p-4">
        <Hero />
        <Row>
          <Col md={5}>
            <CausesList />
          </Col>
          <Col md={5}>
            <EventsList />
          </Col>
          <Col md={2}>
            <Advertisements />
          </Col>
        </Row>
      </Container>
    </UserLayout>
  );
};
export default Home;

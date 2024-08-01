import React from "react";
import { UserLayout } from "../components/layouts/UserLayout";
import { Col, Container, Row } from "react-bootstrap";
import { EventsList } from "../components/EventsList";
import Hero from "../components/Hero";
import { useAuth, useUser } from "@clerk/clerk-react";
import { CausesList } from "../components/CausesList";
import { Advertisements } from "../components/Advertisements";

const Home = () => {
  return (
    <UserLayout>
      <Hero />
      <Container>
        <Row>
          <Col md={8}>
            <CausesList />
            <EventsList />
          </Col>
          <Col md={4}>
            <Advertisements />
          </Col>
        </Row>
      </Container>
    </UserLayout>
  );
};
export default Home;

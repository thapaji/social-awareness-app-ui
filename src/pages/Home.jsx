import React from "react";
import { UserLayout } from "../components/layouts/UserLayout";
import { Col } from "react-bootstrap";
import { EventsList } from "../components/EventsList";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <UserLayout>
      <Hero/>
      {/* <Col>Causes near you</Col>
      <Col>
        <EventsList />
      </Col> */}
    </UserLayout>
  );
};

export default Home;

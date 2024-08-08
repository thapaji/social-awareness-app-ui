import React from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <UserLayout>
      <div className="accent-bg p-4 full-height-content">
        <Container>
          <h1>About Us</h1>
          <p className="text-center fs-5 fw-bold secondary-color">
            The "Hand in Hand" is designed with thoughtful consideration of its mission to promote
            social awareness and support small businesses.
          </p>
        </Container>
      </div>
    </UserLayout>
  );
};

export default About;

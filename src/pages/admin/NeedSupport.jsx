import React from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import business from "../../assets/business.png";
import awarness from "../../assets/awarness.png";

const NeedSupport = () => {
  const campaign =
    "https://images.unsplash.com/photo-1591189596798-6282ba89ebf0?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <UserLayout>
      <div className="accent-bg p-4 full-height-content">
        <Container>
          <h1>Need support?</h1>
          <Row>
            <Col className="align-right">
              <Card className="clickable-card accent-bg">
                <Link to="/need-support/business">
                  <div className="d-flex justify-content-center">
                    <Card.Img variant="top" src={business} style={{ width: "50%" }} />
                  </div>
                  <Card.Body className="text-center">
                    <h3>Do you need support for your small business?</h3>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col>
              <h1>OR</h1>
            </Col>
            <Col>
              <Card className="clickable-card accent-bg">
                <Link to="/need-support/awarness">
                  <div className="d-flex justify-content-center">
                    <Card.Img variant="top" src={campaign} style={{ width: "50%" }} />
                  </div>
                  <Card.Body className="text-center">
                    <h3>Looking for social causes?</h3>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col>
              <h1>OR</h1>
            </Col>
            <Col>
              <Card className="clickable-card accent-bg">
                <Link to="/need-support/events">
                  <div className="d-flex justify-content-center">
                    <Card.Img variant="top" src={awarness} style={{ width: "50%" }} />
                  </div>
                  <Card.Body className="text-center">
                    <h3>Looking for social awarness campaings?</h3>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </UserLayout>
  );
};

export default NeedSupport;

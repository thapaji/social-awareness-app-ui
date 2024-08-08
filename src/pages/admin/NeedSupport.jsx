import React from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import business from "../../assets/business.png";
import awarness from "../../assets/awarness.png";

const NeedSupport = () => {
  return (
    <UserLayout>
      <div className="accent-bg p-4 full-height-content">
        <Container>
          <h1>Need support?</h1>
          <Row>
            <Col className="align-right" sm={5}>
              <Card className="clickable-card accent-bg" style={{ width: "85%" }}>
                <Link>
                  <div className="d-flex justify-content-center">
                    <Card.Img variant="top" src={business} style={{ width: "50%" }} />
                  </div>
                  <Card.Body className="text-center">
                    <h3>Do you need support for your small business?</h3>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col sm={2}>
              <h1>OR</h1>
            </Col>
            <Col sm={5}>
              <Card className="clickable-card accent-bg" style={{ width: "85%" }}>
                <Link>
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

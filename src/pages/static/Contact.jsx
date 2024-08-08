import React from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CustomInput } from "../../components/CustomInput";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <UserLayout>
      <div className="accent-bg p-4 full-height-content">
        <Container style={{ width: "90vh" }}>
          <h1>Contact Us</h1>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-4">
              <Col className="text-end fw-bold fs-5 secondary-color" sm={4}>
                Name:
              </Col>
              <Col>
                <input
                  type="text"
                  className="form-control secondary-border"
                  placeholder="Enter your name"
                />
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="text-end fw-bold fs-5 secondary-color" sm={4}>
                Phone:
              </Col>
              <Col>
                <input
                  type="number"
                  className="form-control secondary-border"
                  placeholder="Enter your phone number"
                />
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="text-end fw-bold fs-5 secondary-color" sm={4}>
                Message:
              </Col>
              <Col>
                <textarea
                  className="form-control secondary-border"
                  rows="5"
                  placeholder="Enter your message"
                />
              </Col>
            </Row>
            <Row>
              <Button type="submit" className="secondary-bg m-auto" style={{ width: "50%" }}>
                Send Message
              </Button>
            </Row>
          </Form>
        </Container>
      </div>
    </UserLayout>
  );
};

export default Contact;

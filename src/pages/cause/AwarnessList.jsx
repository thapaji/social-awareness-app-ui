import React from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import clean_water from "../../assets/clean_water.png";
import no_plastic from "../../assets/no_plastic.png";
import free_food from "../../assets/free_food.png";
import free_health from "../../assets/free_health.png";
import breast_cancer from "../../assets/breast_cancer.png";

const AwarnessList = () => {
  return (
    <UserLayout>
      <div className="accent-bg p-4 full-height-content">
        <Container>
          <h1>Social Awarness Campaigns</h1>
          <Row>
            <Col>
              <Card className="clickable-card accent-bg">
                <div className="d-flex justify-content-center">
                  <Card.Img variant="top" src={clean_water} />
                </div>
                <Card.Body className="text-center">
                  <div className="d-grid">
                    <Button className="secondary-bg">CLean Water</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="clickable-card accent-bg">
                <div className="d-flex justify-content-center">
                  <Card.Img variant="top" src={no_plastic} />
                </div>
                <Card.Body className="text-center">
                  <div className="d-grid">
                    <Button className="secondary-bg">No Plastic</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="clickable-card accent-bg">
                <div className="d-flex justify-content-center">
                  <Card.Img variant="top" src={free_food} />
                </div>
                <Card.Body className="text-center">
                  <div className="d-grid">
                    <Button className="secondary-bg">Free Food</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="clickable-card accent-bg">
                <div className="d-flex justify-content-center">
                  <Card.Img variant="top" src={free_health} />
                </div>
                <Card.Body className="text-center">
                  <div className="d-grid">
                    <Button className="secondary-bg">Free Health</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="clickable-card accent-bg">
                <div className="d-flex justify-content-center">
                  <Card.Img variant="top" src={breast_cancer} />
                </div>
                <Card.Body className="text-center">
                  <div className="d-grid">
                    <Button className="secondary-bg">Cancer</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </UserLayout>
  );
};

export default AwarnessList;

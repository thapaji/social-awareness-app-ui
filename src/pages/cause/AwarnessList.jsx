import React from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AwarnessList = () => {
  const causes = useSelector((state) => state.causes.causes);
  return (
    <UserLayout>
      <div className="accent-bg p-4 full-height-content">
        <Container>
          <h1>Social Awarness Campaigns</h1>
          <Row>
            {causes.map((cause) => (
              <Col key={cause._id}>
                <Link to={`/need-support/awarness/${cause._id}`}>
                  <Card className="clickable-card accent-bg">
                    <div className="d-flex justify-content-center">
                      <Card.Img
                        variant="top"
                        src={cause.image}
                        style={{ height: "20vh", width: "auto" }}
                      />
                    </div>
                    <Card.Body className="text-center">
                      <div className="d-grid">
                        <Button className="secondary-bg">{cause.title.slice(0, 10) + "..."}</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </UserLayout>
  );
};

export default AwarnessList;

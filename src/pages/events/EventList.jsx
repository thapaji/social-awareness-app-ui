import React from "react";
import { useSelector } from "react-redux";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const EventList = () => {
  const events = useSelector((state) => state.events.events);

  return (
    <UserLayout>
      <div className="accent-bg p-4 full-height-content">
        <Container>
          <h1>Social Awarness Campaigns</h1>
          <Row>
            {events.map((event) => (
              <Col key={event._id}>
                <Link to={`/need-support/events/${event._id}`}>
                  <Card className="clickable-card accent-bg">
                    <div className="d-flex justify-content-center">
                      <Card.Img
                        variant="top"
                        src={event.image}
                        style={{ height: "20vh", width: "auto" }}
                      />
                    </div>
                    <Card.Body className="text-center">
                      <div className="d-grid">
                        <Button className="secondary-bg">{event.title}</Button>
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

export default EventList;

import { useUser } from "@clerk/clerk-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateEvent } from "./eventActions";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const EventPage = () => {
  const { id } = useParams();
  const events = useSelector((state) => state.events.events);
  const selectedEvent = events.find((event) => event._id === id);
  const { user } = useUser();

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onParticipate = () => {
    if (!user) {
      return toast.warn("User must be logged in");
    }
    const { participants, ...rest } = selectedEvent;
    const eventToEdit = { ...rest, participants: [...participants, { username: user.fullName }] };
    dispatch(updateEvent(selectedEvent._id, eventToEdit));
  };

  const onComment = (data) => {
    if (!user) {
      return toast.warn("User must be logged in");
    }
    const { comments, ...rest } = selectedEvent;
    const eventToEdit = {
      ...rest,
      comments: [...comments, { username: user.fullName, comment: data.comment }],
    };
    dispatch(updateEvent(selectedEvent._id, eventToEdit));
    reset();
  };

  return (
    <UserLayout>
      <div className="accent-bg p-4 full-height-content">
        <Container>
          <h1>{selectedEvent.title}</h1>
          <Row>
            <img src={selectedEvent.image} alt={selectedEvent.title} className="event-image" />
          </Row>
          <Row>
            <h2 className="mb-4">Supporting: {selectedEvent.cause.causeTitle}</h2>
            <Row className="mb-4">
              <Col>Date: {selectedEvent.date.slice(0, 10)}</Col>
              <Col>Location: {selectedEvent.location}</Col>
            </Row>
            <p>{selectedEvent.description}</p>
          </Row>

          <Row>
            <h3>Participants:</h3>
            <Row>
              {selectedEvent.participants.length > 0 ? (
                selectedEvent.participants.map((participant) => (
                  <Col key={participant.userId} xs={3} className="text-center">
                    <div className="participant-circle">
                      {participant.username.charAt(0).toUpperCase()}
                    </div>
                    <div className="participant-name">{participant.username}</div>
                  </Col>
                ))
              ) : (
                <p className="text-success">Be the first one to support the event.</p>
              )}
            </Row>
            <Row>
              <Button onClick={onParticipate}>Participate</Button>
            </Row>
          </Row>

          <Row className="mt-5">
            <h3>Comments:</h3>
            <Row>
              {selectedEvent.comments.length > 0 ? (
                selectedEvent.comments.map((comment, index) => (
                  <Col key={index} xs={12} className="mb-3">
                    <strong>{comment.username}:</strong> {comment.comment}
                  </Col>
                ))
              ) : (
                <p>No comments yet. Be the first to comment!</p>
              )}
            </Row>

            <Form onSubmit={handleSubmit(onComment)}>
              <Form.Group controlId="comment">
                <Form.Label>Add a comment</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  {...register("comment", { required: "Comment is required" })}
                  isInvalid={errors.comment}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.comment?.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Button type="submit" className="mt-3">
                Post Comment
              </Button>
            </Form>
          </Row>
        </Container>
      </div>
    </UserLayout>
  );
};

export default EventPage;

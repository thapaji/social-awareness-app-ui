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
    const isUserParticipant = selectedEvent.participants.some(
      (participant) => participant.userId === user.id
    );

    let updatedParticipants;

    if (isUserParticipant) {
      updatedParticipants = selectedEvent.participants.filter(
        (participant) => participant.userId !== user.id
      );
    } else {
      updatedParticipants = [
        ...selectedEvent.participants,
        { userId: user.id, username: user.fullName, image: user.imageUrl },
      ];
    }
    const eventToEdit = {
      ...selectedEvent,
      participants: updatedParticipants,
      causeId: selectedEvent.cause.causeId,
      causeTitle: selectedEvent.cause.causeTitle,
      cause: null,
    };
    dispatch(updateEvent(selectedEvent._id, eventToEdit, false));

    const message = isUserParticipant
      ? "You have opted out of the event."
      : "You are now participating in the event.";

    toast.success(message);
  };

  const onComment = (data) => {
    if (!user) {
      return toast.warn("User must be logged in");
    }
    const { comments, ...rest } = selectedEvent;
    const eventToEdit = {
      ...rest,
      comments: [
        ...comments,
        { username: user.fullName, comment: data.comment, image: user.imageUrl },
      ],
      causeId: selectedEvent.cause.causeId,
      causeTitle: selectedEvent.cause.causeTitle,
      cause: null,
    };
    dispatch(updateEvent(selectedEvent._id, eventToEdit, false));
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
            <h2 className="mb-4">Supporting: {selectedEvent?.cause?.causeTitle}</h2>
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
                    {participant.image ? (
                      <img
                        src={participant.image}
                        alt={participant.username}
                        className="participant-image"
                        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                      />
                    ) : (
                      <div className="participant-circle">
                        {participant.username.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="participant-name">{participant.username}</div>
                  </Col>
                ))
              ) : (
                <p className="text-success">Be the first one to support the event.</p>
              )}
            </Row>
            <Row>
              {user && (
                <Button onClick={onParticipate}>
                  {selectedEvent.participants.some((participant) => participant.userId === user.id)
                    ? "Opt Out of Event"
                    : "Click Here to Participate"}
                </Button>
              )}
            </Row>
          </Row>

          <Row className="mt-5">
            <h3>Comments:</h3>
            <Row>
              {selectedEvent.comments.length > 0 ? (
                selectedEvent.comments.map((comment, index) => (
                  <Col key={index} xs={12} className="mb-3 d-flex align-items-center">
                    {comment.image ? (
                      <img
                        src={comment.image}
                        alt={comment.username}
                        className="comment-image"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      />
                    ) : (
                      <div
                        className="comment-circle"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          backgroundColor: "#ddd",
                          textAlign: "center",
                          lineHeight: "40px",
                          marginRight: "10px",
                        }}
                      >
                        {comment.username.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <strong>{comment.username}:</strong> {comment.comment}
                    </div>
                  </Col>
                ))
              ) : (
                <p>No comments yet. Be the first to comment!</p>
              )}
            </Row>

            {user && (
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
            )}
          </Row>
        </Container>
      </div>
    </UserLayout>
  );
};

export default EventPage;

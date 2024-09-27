import React from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@clerk/clerk-react";
import { useForm } from "react-hook-form";
import { modifyCause } from "./causeAction";
import { toast } from "react-toastify";

const CausePage = () => {
  const { id } = useParams();
  const causes = useSelector((state) => state.causes.causes);
  const selectedCause = causes.find((cause) => cause._id === id);
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
      return toast.warn("Login to participate in the cause.");
    }

    const isUserParticipant = selectedCause.participants.some(
      (participant) => participant.userId === user.id
    );

    let updatedParticipants;

    if (isUserParticipant) {
      updatedParticipants = selectedCause.participants.filter(
        (participant) => participant.userId !== user.id
      );
    } else {
      updatedParticipants = [
        ...selectedCause.participants,
        { userId: user.id, username: user.fullName, image: user.imageUrl },
      ];
    }

    const causeToEdit = {
      ...selectedCause,
      participants: updatedParticipants,
    };

    dispatch(modifyCause(selectedCause._id, causeToEdit, false));

    const message = isUserParticipant
      ? "You have opted out of the cause."
      : "You are now participating in the cause.";

    toast.success(message);
  };

  const onComment = (data) => {
    if (!user) {
      return toast.warn("User must be logged in");
    }
    const { comments, ...rest } = selectedCause;
    const causeToEdit = {
      ...rest,
      comments: [
        ...comments,
        { username: user.fullName, comment: data.comment, image: user.imageUrl },
      ],
    };
    dispatch(modifyCause(selectedCause._id, causeToEdit, false));
    reset();
  };

  return (
    <UserLayout>
      <div className="accent-bg p-4 full-height-content">
        <Container>
          <h1>{selectedCause.title}</h1>
          <Row>
            <img src={selectedCause.image} alt={selectedCause.title} className="cause-image" />
          </Row>
          <Row>
            <p>{selectedCause.description}</p>
          </Row>

          <Row>
            <h3>Participants:</h3>
            <Row>
              {selectedCause.participants.length > 0 ? (
                selectedCause.participants.map((participant) => (
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
                <p className="text-success">Be the first one to support the cause.</p>
              )}
            </Row>
            <Row>
              {user && (
                <Button onClick={onParticipate}>
                  {selectedCause.participants.some((participant) => participant.userId === user.id)
                    ? "Opt Out of Cause"
                    : "Click Here to Participate"}
                </Button>
              )}
            </Row>
          </Row>

          <Row className="mt-5">
            <h3>Comments:</h3>
            <Row>
              {selectedCause.comments.length > 0 ? (
                selectedCause.comments.map((comment, index) => (
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

export default CausePage;

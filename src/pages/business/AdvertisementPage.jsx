import { useUser } from "@clerk/clerk-react";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateAdvertisement } from "./businessAction";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const AdvertisementPage = () => {
  const { id } = useParams();
  const advertisements = useSelector((state) => state.business.advertisements);
  const selectedAdvertisement = advertisements.find((advertisement) => advertisement._id === id);
  const { user } = useUser();

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onLove = () => {
    if (!user) {
      return toast.warn("Login to hit love.");
    }

    const hasUserLoved = selectedAdvertisement.lovers.some((lovers) => lovers.userId === user.id);

    let updatedLovers;

    if (hasUserLoved) {
      updatedLovers = selectedAdvertisement.lovers.filter((lovers) => lovers.userId !== user.id);
    } else {
      updatedLovers = [
        ...selectedAdvertisement.lovers,
        { userId: user.id, username: user.fullName, image: user.imageUrl },
      ];
    }

    const advertisementToEdit = {
      ...selectedAdvertisement,
      lovers: updatedLovers,
    };

    dispatch(updateAdvertisement(selectedAdvertisement._id, advertisementToEdit, false));

    const message = hasUserLoved
      ? "You no longer love this advertisement."
      : "You love this advertisement.";

    toast.success(message);
  };

  const onComment = (data) => {
    if (!user) {
      return toast.warn("User must be logged in");
    }
    const { comments, ...rest } = selectedAdvertisement;
    const advertisementToEdit = {
      ...rest,
      comments: [
        ...comments,
        { username: user.fullName, comment: data.comment, image: user.imageUrl },
      ],
    };
    dispatch(updateAdvertisement(selectedAdvertisement._id, advertisementToEdit, false));
    reset();
  };

  return (
    <UserLayout>
      <div className="accent-bg p-4 full-height-content">
        <Container>
          <h1>{selectedAdvertisement.title}</h1>
          <Row>
            <img
              src={selectedAdvertisement.image}
              alt={selectedAdvertisement.title}
              className="advertisement-image"
            />
            <h2>By: {selectedAdvertisement.business}</h2>
          </Row>
          <Row>
            <p>{selectedAdvertisement.description}</p>
          </Row>

          <Row>
            <h3>People who loves this:</h3>
            <Row>
              {selectedAdvertisement.lovers.length > 0 ? (
                selectedAdvertisement.lovers.map((lover) => (
                  <Col key={lover.userId} xs={3} className="text-center">
                    {lover.image ? (
                      <img
                        src={lover.image}
                        alt={lover.username}
                        className="lover-image"
                        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                      />
                    ) : (
                      <div className="lover-circle">{lover.username.charAt(0).toUpperCase()}</div>
                    )}
                    <div className="lover-name">{lover.username}</div>
                  </Col>
                ))
              ) : (
                <p className="text-success">Be the first one to support the advertisement.</p>
              )}
            </Row>
            <Row>
              <Button onClick={onLove}>
                {selectedAdvertisement.lovers.some((lover) => lover.userId === user.id)
                  ? "Unlove this advertisement"
                  : "Click Here to Love this advertisement"}
              </Button>
            </Row>
          </Row>

          <Row className="mt-5">
            <h3>Comments:</h3>
            <Row>
              {selectedAdvertisement.comments.length > 0 ? (
                selectedAdvertisement.comments.map((comment, index) => (
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

export default AdvertisementPage;

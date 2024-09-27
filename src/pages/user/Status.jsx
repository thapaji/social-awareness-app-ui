import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Card, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createCause } from "../../pages/cause/causeAction";
import { useUser } from "@clerk/clerk-react";
import { FaImage } from "react-icons/fa";

export const Status = () => {
  const { user } = useUser();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    if (!data.image[0]) {
      alert("Image is required");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("createdBy", user.fullName);
    formData.append("image", data.image[0]);

    await dispatch(createCause(formData));
    reset();
    setLoading(false);
  };

  return (
    <Card className="mb-4 shadow-sm" style={{ width: "100%", margin: "auto" }}>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <fieldset disabled={loading}>
            <div className="d-flex align-items-center mb-3">
              <img
                src={user.imageUrl}
                alt={user.username}
                className="lover-image"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <Form.Control
                type="text"
                placeholder="What's your cause?"
                className="border-0 fs-5 ms-3"
                style={{ fontWeight: "bold" }}
                {...register("title", { required: "Title is required" })}
                isInvalid={!!errors.title}
              />
            </div>

            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Describe your cause"
              className="border-0 mb-3"
              style={{ resize: "none" }}
              {...register("description", { required: "Description is required" })}
              isInvalid={!!errors.description}
            />

            <Form.Group controlId="statusCategory" className="mb-3">
              <Form.Control
                as="select"
                {...register("category", { required: "Category is required" })}
                className="border-0"
                isInvalid={!!errors.category}
              >
                <option value="">Select Category</option>
                <option value="Education">Education</option>
                <option value="Health">Health</option>
                <option value="Environment">Environment</option>
                <option value="Social">Social</option>
              </Form.Control>
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <FaImage size={20} className="me-2 text-muted" />
                <Form.Control
                  type="file"
                  {...register("image", { required: "Image is required" })}
                  accept="image/*"
                  className="border-0"
                  isInvalid={!!errors.image}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.image?.message}
                </Form.Control.Feedback>
              </div>
            </div>
            <div className="text-end mt-3">
              <Button type="submit" variant="primary" className="rounded-pill px-4">
                {loading ? (
                  <Spinner animation="border" size="sm" role="status" aria-hidden="true" />
                ) : (
                  "Post"
                )}
              </Button>
            </div>
          </fieldset>
        </Form>
      </Card.Body>
    </Card>
  );
};

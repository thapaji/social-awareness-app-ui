import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Card, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createAdvertisement } from "../../pages/business/businessAction";
import { useUser } from "@clerk/clerk-react";
import { FaImage } from "react-icons/fa";

const AdvertStatus = () => {
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
    formData.append("business", data.business);
    formData.append("image", data.image[0]);

    await dispatch(createAdvertisement(formData));
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
                className="rounded-circle"
                style={{ width: "50px", height: "50px" }}
              />
              <Form.Control
                type="text"
                placeholder="What's your advertisement?"
                className="border-0 fs-5 ms-3"
                style={{ fontWeight: "bold" }}
                {...register("title", { required: "Title is required" })}
                isInvalid={!!errors.title}
              />
              <Form.Control.Feedback type="invalid">{errors.title?.message}</Form.Control.Feedback>
            </div>

            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Describe your advertisement"
              className="border-0 mb-3"
              style={{ resize: "none" }}
              {...register("description", { required: "Description is required" })}
              isInvalid={!!errors.description}
            />
            <Form.Control.Feedback type="invalid">
              {errors.description?.message}
            </Form.Control.Feedback>

            <Form.Group controlId="formBusiness" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Business Name"
                className="border-0"
                {...register("business", { required: "Business Name is required" })}
                isInvalid={!!errors.business}
              />
              <Form.Control.Feedback type="invalid">
                {errors.business?.message}
              </Form.Control.Feedback>
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
                  "Post Advertisement"
                )}
              </Button>
            </div>
          </fieldset>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AdvertStatus;

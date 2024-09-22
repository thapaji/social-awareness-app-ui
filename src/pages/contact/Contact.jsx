import React, { useState } from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CustomInput } from "../../components/CustomInput";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createMessage } from "./contactAction";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Use the reset function from react-hook-form
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const { name, phone, message } = data;

    if (!name || !phone || !message) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      await dispatch(createMessage(data));
      setErrorMessage("");
      reset(); // Reset the form after successful submission
    } catch (error) {
      setErrorMessage("An error occurred while sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <UserLayout>
      <div className="accent-bg p-4 full-height-content">
        <Container style={{ width: "90vh" }}>
          <h1>Contact Us</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-4">
              <Col className="text-end fw-bold fs-5 secondary-color" sm={4}>
                Name:
              </Col>
              <Col>
                <input
                  {...register("name", { required: true })}
                  className="form-control secondary-border"
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-danger">Name is required</p>}
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="text-end fw-bold fs-5 secondary-color" sm={4}>
                Phone:
              </Col>
              <Col>
                <input
                  {...register("phone", { required: true })}
                  type="number"
                  className="form-control secondary-border"
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="text-danger">Phone number is required</p>}
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="text-end fw-bold fs-5 secondary-color" sm={4}>
                Message:
              </Col>
              <Col>
                <textarea
                  {...register("message", { required: true })}
                  className="form-control secondary-border"
                  rows="5"
                  placeholder="Enter your message"
                />
                {errors.message && <p className="text-danger">Message is required</p>}
              </Col>
            </Row>
            <Row>
              <Button
                type="submit"
                className="secondary-bg m-auto"
                style={{ width: "50%" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
              </Button>
            </Row>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
          </Form>
        </Container>
      </div>
    </UserLayout>
  );
};

export default Contact;

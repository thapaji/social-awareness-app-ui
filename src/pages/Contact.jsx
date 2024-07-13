import React from "react";
import { UserLayout } from "../components/layouts/UserLayout";
import { Button, Container, Form } from "react-bootstrap";
import { CustomInput } from "../components/CustomInput";

const Contact = () => {
  const inputs = [
    { label: "First Name", name: "fname", type: "text", placeholder: "Enter First Name" },
    { label: "Last Name", name: "lname", type: "text", placeholder: "Enter Last Name" },
    { label: "Email", name: "email", type: "email", placeholder: "Enter email" },
    {
      label: "Message",
      name: "message",
      type: "text",
      as: "textarea",
      rows: "10",
      placeholder: "Type your message here",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <UserLayout>
      <Container>
        <h1>Contact Us</h1>
        <hr />
        <Form className="" onSubmit={handleSubmit}>
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} />
          ))}
          <div className="d-grid">
            <Button type="submit">Send...</Button>
          </div>
        </Form>
      </Container>
    </UserLayout>
  );
};

export default Contact;

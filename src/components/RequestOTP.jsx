import React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { CustomInput } from "../common/custom-input/CustomInput";
import useForm from "../../Hooks/useForm";
import { toast } from "react-toastify";
import { requestOTP } from "../../features/users/userAxios";

export const RequestOTP = ({ handleOTPRequest, setEmail }) => {
  const inputs = { label: "Email", name: "email", type: "email", placeholder: "Enter email" };

  const { form, setForm, handleChange } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email) {
      return toast.error("Please enter email");
    }
    setEmail(form.email);
    handleOTPRequest();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h3>Request OTP</h3>
        <Alert>If we have email in our system we will send you an OTP.</Alert>
        <CustomInput {...inputs} onChange={handleChange} />

        <div className="d-grid">
          <Button type="submit">Submit Request</Button>
        </div>
      </Form>
    </>
  );
};

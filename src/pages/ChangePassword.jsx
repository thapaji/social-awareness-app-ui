import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { CustomInput } from "../components/CustomInput";
// import { updatePassword } from "../../features/users/userAction";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);

  const inputs = [
    {
      label: "Current Password",
      name: "currentPassword",
      type: "password",
      placeholder: "Enter current password",
    },
    {
      label: "New Password",
      name: "newPassword",
      type: "password",
      placeholder: "Enter new password",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm new password",
    },
  ];

  const { form, setForm, handleChange } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.currentPassword || !form.newPassword || !form.confirmPassword) {
      return toast.error("Please fill in all fields");
    }
    if (form.newPassword !== form.confirmPassword) {
      return toast.error("New password and confirm password do not match");
    }
    // Add  password update logic here
    updatePassword(dispatch, form);
  };

  return (
    <>
      <Row>
        <h4>Change Password</h4>
        <hr />
      </Row>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleChange} />
            ))}
            <div className="d-grid">
              <Button type="submit">Change Password</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default ChangePassword;

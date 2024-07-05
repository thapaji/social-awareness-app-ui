import React from "react";
import { Button, Form } from "react-bootstrap";
// import { createNewAdminAction } from "../../features/users/userAction";
import { toast } from "react-toastify";
import { CustomInput } from "../components/CustomInput";

const Register = () => {
  const inputs = [
    { label: "First Name", name: "fname", type: "text", placeholder: "Enter First Name" },
    { label: "Last Name", name: "lname", type: "text", placeholder: "Enter Last Name" },
    { label: "Email", name: "email", type: "email", placeholder: "Enter email" },
    { label: "Password", name: "password", type: "password", placeholder: "Enter password" },
    {
      label: "Confirm Password",
      name: "cpassword",
      type: "password",
      placeholder: "Confirm password",
    },
  ];
  const { form, setForm, handleChange } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    // form.cpassword = undefined
    const { cpassword, ...rest } = form;
    if (cpassword !== rest.password) {
      return toast.error("Passwords do not match");
    }
    createNewAdminAction(rest);
  };

  return (
    <>
      <h4>Register New Admin</h4>
      <hr />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="shadow-lg p-3 rounded m-auto" style={{ width: "450px" }}>
          <Form className="" onSubmit={handleSubmit}>
            <h3>Admin Registration</h3>
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleChange} />
            ))}
            <div className="d-grid">
              <Button type="submit">Register New Admin</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;

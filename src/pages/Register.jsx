import React from "react";
import { Button, Form } from "react-bootstrap";
// import { createNewAdminAction } from "../../features/users/userAction";
import { toast } from "react-toastify";
import { CustomInput } from "../components/CustomInput";
import { UserLayout } from "../components/layouts/UserLayout";

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
  // const { form, setForm, handleChange } = useForm({});

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
    <UserLayout>
      <div className="d-flex justify-content-center align-items-center">
        <div className="shadow-lg p-5 rounded m-auto" style={{ width: "450px" }}>
          <Form className="" onSubmit={handleSubmit}>
            <h3>Admin Registration</h3>
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} />
            ))}
            <div className="d-grid">
              <Button type="submit">Register...</Button>
            </div>
          </Form>
          <div className="text-end mt-2">
            <a href="/login">Already have an account?</a>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Register;

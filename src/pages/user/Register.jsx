import React from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { CustomInput } from "../../components/CustomInput";
import { UserLayout } from "../../components/layouts/UserLayout";
import { useForm } from "react-hook-form";
import { postUserObj } from "./userAction";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
  });

  const password = watch("password");

  const inputs = [
    { label: "Name", name: "name", type: "text", placeholder: "Enter Name" },
    { label: "Email", name: "email", type: "email", placeholder: "Enter email" },
    { label: "Password", name: "password", type: "password", placeholder: "Enter password" },
    {
      label: "Confirm Password",
      name: "cpassword",
      type: "password",
      placeholder: "Confirm password",
    },
  ];

  const onSubmit = (data) => {
    const { cpassword, ...rest } = data;
    if (cpassword !== rest.password) {
      return toast.error("Passwords do not match");
    }
    const status = dispatch(postUserObj(rest));
  };

  return (
    <UserLayout>
      <div className="d-flex justify-content-center align-items-center">
        <div className="shadow-lg p-5 rounded m-auto" style={{ width: "450px" }}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h3>Admin Registration</h3>
            {inputs.map((item, i) => (
              <Form.Group key={i} className="mb-3 form-group">
                <CustomInput
                  label={item.label}
                  {...item}
                  {...register(item.name, {
                    required: `${item.label} is required`,
                    ...(item.name === "cpassword" && {
                      validate: (value) => value === password || "Passwords do not match",
                    }),
                  })}
                />
                {errors[item.name] && (
                  <div className="error-bubble">{errors[item.name].message}</div>
                )}
              </Form.Group>
            ))}
            <div className="d-grid">
              <Button type="submit">Register</Button>
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

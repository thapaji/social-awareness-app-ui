import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomInput } from "../../components/CustomInput";
import { UserLayout } from "../../components/layouts/UserLayout";
import { useForm } from "react-hook-form";
import { loginAction } from "./userAction";

const Login = () => {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.userInfo);
  const navigate = useNavigate();
  const location = useLocation();
  // const redirectTo = location?.state?.from?.pathname || "/admin/dashboard";

  // useEffect(() => {
  //   if (user?._id) {
  //     navigate(redirectTo);
  //   }
  // }, [user, navigate, redirectTo]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const inputs = [
    { label: "Email", name: "email", type: "email", placeholder: "Enter email" },
    { label: "Password", name: "password", type: "password", placeholder: "Enter password" },
  ];

  const onSubmit = async (data) => {
    if (!data.email || !data.password) {
      return toast.error("Please enter email and/or password");
    }
    const status = await dispatch(loginAction(data));
    if (status === "success") {
      navigate("/");
    }
  };

  return (
    <UserLayout>
      <div className="login d-flex justify-content-center align-items-center">
        <div className="border shadow-lg bg-light p-5 rounded" style={{ width: "450px" }}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h3>Login</h3>
            {inputs.map((item, i) => (
              <Form.Group key={i} className="mb-3">
                <CustomInput
                  label={item.label}
                  {...item}
                  {...register(item.name, { required: `${item.label} is required` })}
                />
                {errors[item.name] && (
                  <div className="error-bubble">{errors[item.name].message}</div>
                )}
              </Form.Group>
            ))}
            <div className="d-grid">
              <Button type="submit">Login</Button>
            </div>
          </Form>
          <div className="text-end mt-2">
            <a href="/forget-password">Forget Password?</a>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Login;

import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
// import { login } from "../../features/users/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomInput } from "../components/CustomInput";

const Login = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location?.state?.from?.pathname || "/admin/dashboard";

  useEffect(() => {
    user?._id && navigate(redirectTo);
  }, [user]);

  const inputs = [
    { label: "Email", name: "email", type: "email", placeholder: "Enter email" },
    { label: "Password", name: "password", type: "password", placeholder: "Enter password" },
  ];
  const { form, setForm, handleChange } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      return toast.error("Please enter email and/or password");
    }
    login(dispatch, form);

    // createNewAdminAction(rest);
  };

  return (
    <div className="login d-flex justify-content-center align-items-center vh-100">
      <div className="border shadow-lg  bg-light p-5 rounded" style={{ width: "450px" }}>
        <Form onSubmit={handleSubmit}>
          <h3>Login</h3>
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleChange} />
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
  );
};

export default Login;

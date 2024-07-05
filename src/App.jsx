import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import { Auth } from "./components/auth/Auth";
import { useDispatch } from "react-redux";
// import { autoLogin } from "./features/users/userAction";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChangePassword from "./pages/ChangePassword";
import ForgetPassword from "./pages/ForgetPassword";
import Home from "./pages/Home";
import UserVerification from "./pages/UserVerification";
import Profile from "./pages/Profile";
import { Auth } from "./components/Auth";
import { UserLayout } from "./components/layouts/UserLayout";

const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(autoLogin());
  // }, []);

  return (
    <>
      <Routes>
        /************** Public Routes ****************/
        <Route path="/" element={<Home />} />
        <Route path="/verify-user" element={<UserVerification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/admin/new" element={<Register />} />
        /************** Private Routes ****************/
        <Route
          path="/"
          element={
            <Auth>
              <UserLayout />
            </Auth>
          }
        >
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/change-password" element={<ChangePassword />} />
        </Route>
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;

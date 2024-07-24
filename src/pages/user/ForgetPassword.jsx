import React, { useState } from "react";
// import { RequestOTP } from "../../components/password-reset/RequestOTP";
// import { ResetPass } from "../../components/password-reset/ResetPass";
// import { requestOTP } from "../../features/users/userAxios";

const ForgetPassword = () => {
  const [showForm, setShowForm] = useState("otp");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleOTPRequest = async () => {
    const response = await requestOTP(email);
    if (response.status === "success") {
      setMessage(response.message);
      setShowForm("reset");
    }
  };

  const forms = {
    otp: <RequestOTP handleOTPRequest={handleOTPRequest} setEmail={setEmail} />,
    reset: <ResetPass message={message} />,
  };

  return (
    <div className="login d-flex justify-content-center align-items-center vh-100">
      <div className="border shadow-lg  bg-light p-5 rounded" style={{ width: "450px" }}>
        {forms[showForm]}
        <div className="text-end mt-2">
          <a href="/">Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

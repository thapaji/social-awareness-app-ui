import React, { useEffect, useRef, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
// import { verifyUserVerificationAction } from "../../features/users/userAction";

const UserVerification = () => {
  const [searchParams] = useSearchParams();
  const [resp, setResp] = useState({});

  const shouldCall = useRef(true);
  useEffect(() => {
    const c = searchParams.get("c");
    const e = searchParams.get("e");

    if (shouldCall.current) {
      shouldCall.current = false;
      (async () => {
        const data = await verifyUserVerificationAction({c,e});
        setResp(data);
      })();
    }
  }, [searchParams]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center" style={{ width: "450px" }}>
        {resp.message ? (
          <Alert variant={resp.status === "success" ? "success" : "danger"}>{resp.message}</Alert>
        ) : (
          <>
            <Spinner variant="primary" />
            <div>Please Wait....</div>
          </>
        )}
        {/* {resp?.message ? 
        ():
        (<> 
          <Spinner variant="primary" />
          <div>Please Wait....</div>
          </>)} */}
      </div>
    </div>
  );
};

export default UserVerification;

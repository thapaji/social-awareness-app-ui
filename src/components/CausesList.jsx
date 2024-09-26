import React from "react";
import { useSelector } from "react-redux";
import { CommonCards } from "./CommonCards";
import { Link } from "react-router-dom";

export const CausesList = () => {
  const causes = useSelector((state) => state.causes.causes);
  const navigate = "/need-support/awarness/";

  return (
    <>
      <h2 className="mt-4">Causes Near You</h2>
      <hr className="mb-4" />
      {causes && causes.length > 0 ? (
        causes.map((cause) => (
          <Link to={navigate + cause._id} key={cause._id}>
            <CommonCards
              image={cause.image || "defaultImageUrl.png"}
              title={cause.title}
              subtitle={cause.createdBy}
              text={cause.description}
            />
            <hr />
          </Link>
        ))
      ) : (
        <p>No causes found.</p>
      )}
    </>
  );
};

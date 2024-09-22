import React from "react";
import { useSelector } from "react-redux";
import { CommonCards } from "./CommonCards";

export const CausesList = () => {
  const causes = useSelector((state) => state.causes.causes);
  const navigate = "/need-support/awarness";

  return (
    <>
      <h2 className="mt-4">Causes Near You</h2>
      <hr className="mb-4" />

      {causes && causes.length > 0 ? (
        causes.map((cause) => (
          <CommonCards
            key={cause._id}
            image={cause.image || "defaultImageUrl.png"}
            title={cause.title}
            text={cause.description}
            navigate={navigate}
          />
        ))
      ) : (
        <p>No causes found.</p>
      )}
    </>
  );
};

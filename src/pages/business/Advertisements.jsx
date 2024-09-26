import React from "react";
import { CommonCards } from "../../components/CommonCards";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Advertisements = () => {
  const advertisements = useSelector((state) => state.business.advertisements);
  const activeAdvertisements = advertisements.filter((ad) => ad.status === "active");
  const navigate = "/advertisements/";

  return (
    <>
      <h2 className="mt-4">Go Local</h2>
      <hr className="mb-4" />
      {activeAdvertisements && activeAdvertisements.length > 0 ? (
        activeAdvertisements.map((advertisement) => (
          <Link to={navigate + advertisement._id} key={advertisement._id}>
            {" "}
            <CommonCards
              image={advertisement.image || "defaultImageUrl.png"}
              title={advertisement.title}
              subtitle={advertisement.business}
              text={advertisement.description}
            />
          </Link>
        ))
      ) : (
        <p>No advertisements found.</p>
      )}
    </>
  );
};

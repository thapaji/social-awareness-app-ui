import React from "react";
import { CommonCards } from "./CommonCards";
import adImg from "../assets/ad.png";
import { useSelector } from "react-redux";

export const Advertisements = () => {
  const advertisements = useSelector((state) => state.business.advertisements);
  const activeAdvertisements = advertisements.filter((ad) => ad.status === "active");
  return (
    <>
      <h2 className="mt-4">These might interest you</h2>
      <hr className="mb-4" />
      {activeAdvertisements && activeAdvertisements.length > 0 ? (
        activeAdvertisements.map((advertisement) => (
          <CommonCards
            key={advertisement._id}
            image={advertisement.image || "defaultImageUrl.png"}
            title={advertisement.title}
            text={advertisement.description}
          />
        ))
      ) : (
        <p>No advertisements found.</p>
      )}
    </>
  );
};

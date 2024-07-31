import React from "react";
import { CommonCards } from "./CommonCards";
import adImg from "../assets/ad.png";

export const Advertisements = () => {
  const text = `Vote for your favourite business today. Now is the time to recognise the outstanding businesses 
                providing quality products or services in your local area.`;
  return (
    <>
      <h2 className="mt-4">These might interest you</h2>
      <hr className="mb-4" />
      <CommonCards image={adImg} title="Support Local Business" text={text} />
      <CommonCards image={adImg} title="Promote your business" text={text} />
      <CommonCards image={adImg} title="We got you covered" text={text} />
    </>
  );
};

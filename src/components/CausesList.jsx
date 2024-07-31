import React from "react";
import { CommonCards } from "./CommonCards";
import ed from "../assets/Ed.png";
import giv from "../assets/giv.png";
import kid from "../assets/kid.png";

export const CausesList = () => {
  const text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea sit voluptatum molestias 
                praesentium! Nisi maiores adipisci esse eius molestias aspernatur?`;
  return (
    <>
      <h2 className="mt-4">Causes Near You</h2>
      <hr className="mb-4" />
      <CommonCards image={ed} title="City2Surf" text={text} />
      <CommonCards image={giv} title="City2Surf" text={text} />
      <CommonCards image={kid} title="City2Surf" text={text} />
    </>
  );
};

import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import run from "../assets/run.jpg";
import workshop from "../assets/acc.png";
import speak from "../assets/pro.png";
import { CommonCards } from "./CommonCards";

export const EventsList = () => {
  const text = `The City2Surf serves multiple purposes: it promotes physical fitness and community
              engagement, provides a platform for fundraising for various charities, and offers
              participants the opportunity to enjoy a scenic race route from Sydney's city center to
              Bondi Beach.`;
  return (
    <>
      <h2 className="mt-4">Upcoming Events</h2>
      <hr className="mb-4" />
      <CommonCards image={run} title="City2Surf" text={text} />
      <CommonCards image={workshop} title="Accelerate Her Workshop" text={text} />
      <CommonCards image={speak} title="Speak like a pro" text={text} />
    </>
  );
};

import React from "react";
import { useSelector } from "react-redux";
import { CommonCards } from "./CommonCards";
import { Link } from "react-router-dom";

export const EventsList = () => {
  const events = useSelector((state) => state.events.events);
  const navigate = "/need-support/events/";

  return (
    <>
      <h2 className="mt-4">Upcoming Events</h2>
      <hr className="mb-4" />

      {events && events.length > 0 ? (
        events.map((event) => (
          <Link to={navigate + event._id}  key={event._id}>
            {" "}
            <CommonCards
              image={event.image || "defaultEventImage.png"}
              title={event.title}
              subtitle={event.createdBy}
              text={event.description}
              navigate={navigate}
            />
          </Link>
        ))
      ) : (
        <p>No events found.</p>
      )}
    </>
  );
};

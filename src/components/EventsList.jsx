import React from "react";
import { useSelector } from "react-redux";
import { CommonCards } from "./CommonCards";

export const EventsList = () => {
  const events = useSelector((state) => state.events.events);

  return (
    <>
      <h2 className="mt-4">Upcoming Events</h2>
      <hr className="mb-4" />

      {events && events.length > 0 ? (
        events.map((event) => (
          <CommonCards
            key={event._id}
            image={event.image || "defaultEventImage.png"}
            title={event.title}
            text={event.description}
          />
        ))
      ) : (
        <p>No events found.</p>
      )}
    </>
  );
};

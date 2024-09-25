import React from "react";
import { Button, Card } from "react-bootstrap";

export const CommonCards = ({ image, title, subtitle, text }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>By: {subtitle ? subtitle : "Anonymous"}</Card.Text>
        <Card.Text>{text.length > 100 ? text.slice(0, 100) + "..." : text}</Card.Text>
        <Button variant="primary">Learn More...</Button>
      </Card.Body>
    </Card>
  );
};

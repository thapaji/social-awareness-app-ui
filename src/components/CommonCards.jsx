import React from "react";
import { Button, Card } from "react-bootstrap";
import run from "../assets/run.jpg";

export const CommonCards = ({ image, title, text }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Read More...</Button>
      </Card.Body>
    </Card>
  );
};

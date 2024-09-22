import React from "react";
import { Button, Card } from "react-bootstrap";
import run from "../assets/run.jpg";
import { Link } from "react-router-dom";

export const CommonCards = ({ image, title, text, navigate }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        {navigate && (
          <Link to={navigate}>
            <Button variant="primary">See All...</Button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
};

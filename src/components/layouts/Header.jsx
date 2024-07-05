import React from "react";
import { Col, Row } from "react-bootstrap";

export const Header = () => {
  return (
    <>
      <Row>
        <Col>Cause Chronicle</Col>
        <Col>
          <Col>
            <ul>
              <li>Following</li>
              <li>New</li>
              <li>Popular</li>
            </ul>
          </Col>
          <Col>Menu</Col>
        </Col>
        <Col>Name</Col>
      </Row>
      <Row>
        <input type="text" />
      </Row>
    </>
  );
};

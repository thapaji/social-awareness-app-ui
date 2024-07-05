import React from "react";
import { Form } from "react-bootstrap";

export const CustomInput = ({ label, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      {rest.type === "select" ? (
        <Form.Control as="select" {...rest}>
          {rest.options.map((item, i) => (
            <option key={i} value={item.value} selected={item.selected}>
              {item.label}
            </option>
          ))}
        </Form.Control>
      ) : (
        <Form.Control {...rest} />
      )}
    </Form.Group>
  );
};

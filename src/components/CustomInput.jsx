import React, { forwardRef } from "react";
import { Form } from "react-bootstrap";

export const CustomInput = forwardRef(({ label, options, type, ...rest }, ref) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      {type === "select" ? (
        <Form.Control as="select" ref={ref} {...rest}>
          {options.map((item, i) => (
            <option key={i} value={item.value}>
              {item.label}
            </option>
          ))}
        </Form.Control>
      ) : (
        <Form.Control type={type} ref={ref} {...rest} />
      )}
    </Form.Group>
  );
});

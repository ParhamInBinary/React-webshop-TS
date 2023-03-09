import { useState } from "react";
import { Button, FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export function NewProductForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Form>
        <FloatingLabel
          controlId="floatingInput"
          label="Image URL"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="https://example.jpg"
            required
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Product title"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Example" required />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingTextarea2"
          label="Product description"
        >
          <Form.Control
            as="textarea"
            placeholder="Write a description of the product"
            style={{ height: "100px", resize: "none", marginBottom: "1rem" }}
            required
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Product price"
          className="mb-3"
        >
          <Form.Control type="number" placeholder="Example" required />
        </FloatingLabel>

        <Button type="submit">Create product</Button>
      </Form>
    </>
  );
}

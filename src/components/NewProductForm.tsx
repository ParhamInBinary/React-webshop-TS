import { useState } from "react";
import { Button, FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { generateId } from "../data";

export function NewProductForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const imageUrl = form.elements.namedItem("floatingInput1").value;
      const title = form.elements.namedItem("floatingInput2").value;
      const description = form.elements.namedItem("floatingTextarea1").value;
      const price = form.elements.namedItem("floatingInput3").value;
      const id = generateId();

      const newProduct = { id, image: imageUrl, title, description, price };

      const storedProducts = localStorage.getItem("products");
      const parsedProducts = storedProducts ? JSON.parse(storedProducts) : [];
      
      const updatedProducts = [...parsedProducts, newProduct];
      localStorage.setItem("products", JSON.stringify(updatedProducts));

      form.reset();
      
    }
    setValidated(true);
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingInput1"
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
          controlId="floatingInput2"
          label="Product title"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Example" required />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingTextarea1"
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
          controlId="floatingInput3"
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

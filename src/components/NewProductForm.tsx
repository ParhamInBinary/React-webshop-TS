import { useEffect, useState } from "react";
import { Button, FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { generateId, Product } from "../data";

export function NewProductForm() {
  const [validated, setValidated] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  const handleSubmit = (event: any) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
        console.log("asd")
      const imageUrl = form.elements["floatingInput1"].value;
      const title = form.elements["floatingInput2"].value;
      const description = form.elements["floatingTextarea2"].value;
      const price = form.elements["floatingInput3"].value;
      const id = generateId();

      const newProduct = { id, image: imageUrl, title, description, price };
      setProducts(prevProducts => [...prevProducts, newProduct]);
      localStorage.setItem("products", JSON.stringify(products));
    }
    setValidated(true);
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
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

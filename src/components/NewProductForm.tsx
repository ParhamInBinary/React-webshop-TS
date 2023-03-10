import { useState } from "react";
import { Button, FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { generateId } from "../data";
interface FormFields {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
}

export function NewProductForm() {
  const [validated, setValidated] = useState(false);
  const [formFields, setFormFields] = useState<FormFields>({
    imageUrl: "",
    title: "",
    description: "",
    price: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormFields((prevFormFields) => ({ ...prevFormFields, [name]: value }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const id = generateId();
      const newProduct = { id, ...formFields };
      updateLocalStorage(newProduct);
      setFormFields({ imageUrl: "", title: "", description: "", price: "" });
    }
    setValidated(true);
  };

  const updateLocalStorage = (newProduct: { [key: string]: any }) => {
    const storedProducts = localStorage.getItem("products");
    const parsedProducts = storedProducts ? JSON.parse(storedProducts) : [];
    const updatedProducts = [...parsedProducts, newProduct];
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <FloatingLabel controlId="imageUrl" label="Image URL" className="mb-3">
          <Form.Control
            type="text"
            placeholder="https://example.jpg"
            required
            name="imageUrl"
            value={formFields.imageUrl}
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel controlId="title" label="Product title" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Example"
            required
            name="title"
            value={formFields.title}
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel controlId="description" label="Product description">
          <Form.Control
            as="textarea"
            placeholder="Write a description of the product"
            style={{ height: "100px", resize: "none", marginBottom: "1rem" }}
            required
            name="description"
            value={formFields.description}
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <FloatingLabel controlId="price" label="Product price" className="mb-3">
          <Form.Control
            type="number"
            placeholder="Example"
            required
            name="price"
            value={formFields.price}
            onChange={handleInputChange}
          />
        </FloatingLabel>

        <Button type="submit">Create product</Button>
      </Form>
    </>
  );
}

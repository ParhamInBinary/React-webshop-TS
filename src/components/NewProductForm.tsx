import { useState } from "react";
import { Button, FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { generateId, Product } from "../../data";
interface FormFields {
  image: string;
  title: string;
  description: string;
  price: string;
}

interface NewProductFormProps {
  setItems: React.Dispatch<React.SetStateAction<Product[]>>,
  items: Product[],
}

export function NewProductForm({setItems, items}: NewProductFormProps) {
  const [validated, setValidated] = useState(false);
  const [formFields, setFormFields] = useState<FormFields>({
    image: "",
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
      setValidated(true);
    } else {
      const id = generateId();
      const newProduct = { id, ...formFields };
      updateLocalStorage(newProduct);
      setFormFields({ image: "", title: "", description: "", price: "" });
    }
  };

  const updateLocalStorage = (newProduct: Product) => {
    const updatedProducts = [...items, newProduct];
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setItems(updatedProducts);
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <FloatingLabel controlId="image" label="Image URL" className="mb-3">
          <Form.Control
            type="text"
            placeholder="https://example.jpg"
            required
            name="image"
            value={formFields.image}
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

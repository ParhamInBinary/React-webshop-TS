import { useContext, useState } from "react";
import { Button, FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { generateId, Product } from "../../data";
import { ProductContext } from "../contexts/ProductContext";
interface FormFields {
  image: string;
  title: string;
  description: string;
  price: string;
}

export function NewProductForm() {

  const navigate = useNavigate();
  
  const { items, setItems } = useContext(ProductContext);
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
    if (!form.checkValidity()) {
      event.stopPropagation();
      setValidated(true);
    } else {
      const id = generateId();
      const newProduct = { ...formFields, id };
      updateLocalStorage(newProduct);
      setFormFields({ image: "", title: "", description: "", price: "" });
      navigate("/admin");
    }
  };

  const updateLocalStorage = (newProduct: Product) => {
    const updatedProducts = structuredClone(items);
    updatedProducts.push(newProduct);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setItems(updatedProducts);
  };

  return (
    <>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleFormSubmit}
        data-cy="product-form"
      >
        <FloatingLabel controlId="image" label="Image URL" className="mb-3">
          <Form.Control
            type="text"
            placeholder="https://example.jpg"
            required
            name="image"
            value={formFields.image}
            onChange={handleInputChange}
            data-cy="product-image"
          />
          <Form.Control.Feedback type="invalid" data-cy="product-image-error">
            Please include a URL-link.
          </Form.Control.Feedback>
        </FloatingLabel>

        <FloatingLabel controlId="title" label="Product title" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Example"
            required
            name="title"
            value={formFields.title}
            onChange={handleInputChange}
            data-cy="product-title"
          />
          <Form.Control.Feedback type="invalid" data-cy="product-title-error">
            Please add a product title.
          </Form.Control.Feedback>
        </FloatingLabel>

        <FloatingLabel controlId="description" label="Product description">
          <Form.Control
            type="text"
            placeholder="Write a description of the product"
            required
            name="description"
            value={formFields.description}
            onChange={handleInputChange}
            data-cy="product-description"
          />
          <Form.Control.Feedback
            type="invalid"
            data-cy="product-description-error"
          >
            Please provide a description.
          </Form.Control.Feedback>
        </FloatingLabel>

        <FloatingLabel controlId="price" label="Product price" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Example"
            required
            name="price"
            value={formFields.price}
            onChange={handleInputChange}
            style={{ marginTop: "1rem" }}
            data-cy="product-price"
          />
          <Form.Control.Feedback type="invalid" data-cy="product-price-error">
            Please set a price to the item.
          </Form.Control.Feedback>
        </FloatingLabel>

        <Button type="submit">Create product</Button>
      </Form>
    </>
  );
}

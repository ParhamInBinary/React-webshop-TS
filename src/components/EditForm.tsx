import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Product } from "../../data";

interface EditFormProps {
  item: Product;
  onSave: (updatedItem: Product) => void;
  onCancel: () => void;
}

export function EditForm({ item, onSave, onCancel }: EditFormProps) {
  const [image, setImage] = useState(item.image);
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
      setValidated(true);
    } else {
      onSave({
        ...item,
        image,
        title,
        description,
        price,
      });
    }
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      data-cy="product-form"
    >
      <Form.Group controlId="image">
        <Form.Label style={{ marginTop: "1rem" }}>Image</Form.Label>
        <Form.Control
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          required
          data-cy="product-image"
        />
        <Form.Control.Feedback type="invalid" data-cy="product-image-error">
          Please include a URL-link.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="title">
        <Form.Label style={{ marginTop: "1rem" }}>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
          data-cy="product-title"
        />
        <Form.Control.Feedback type="invalid" data-cy="product-title-error">
          Please add a product title.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label style={{ marginTop: "1rem" }}>Description</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
          data-cy="product-description"
        />
        <Form.Control.Feedback
          type="invalid"
          data-cy="product-description-error"
        >
          Please provide a description.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label style={{ marginTop: "1rem" }}>Price</Form.Label>
        <Form.Control
          type="text"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          required
          data-cy="product-price"
        />
        <Form.Control.Feedback type="invalid" data-cy="product-price-error">
          Please set a price to the item.
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit" style={{ margin: "1rem" }}>
        Save
      </Button>
      <Button variant="outline-danger" onClick={onCancel}>
        Cancel
      </Button>
    </Form>
  );
}

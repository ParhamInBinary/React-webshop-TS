import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Product } from "../../data";

interface EditFormProps {
  item: Product;
  onSave: (updatedItem: Product) => void;
  onCancel: () => void;
}

export function EditForm({ item, onSave, onCancel }: EditFormProps) {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave({
      ...item,
      title,
      description,
      price,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          style={{ resize: "none" }}
        />
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
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

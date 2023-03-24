import { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Product } from "../../data";
import { ProductContext } from "../contexts/ProductContext";

export function EditForm() {
  const { handleSave, setEditingItem, editingItem } =
    useContext(ProductContext);

  useEffect(() => {
    if (!editingItem) {
      const storedItem = localStorage.getItem("selectedItem") ?? "{}";
      const storedObj = JSON.parse(storedItem) as Product;
      setEditingItem(storedObj);
      setImage(storedObj.image);
      setTitle(storedObj.title);
      setDescription(storedObj.description);
      setPrice(storedObj.price);
    }
  }, []);

  const [image, setImage] = useState(editingItem?.image ?? "");
  const [title, setTitle] = useState(editingItem?.title ?? "");
  const [description, setDescription] = useState(
    editingItem?.description ?? ""
  );
  const [price, setPrice] = useState(editingItem?.price ?? 0);

  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
      setValidated(true);
    } else {
      if (!editingItem) return;
      handleSave({
        ...editingItem,
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
          onChange={(event) => setPrice(Number(event.target.value))}
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
      <Button
        variant="outline-danger"
        onClick={() => {
          navigate("/admin");
          setEditingItem(null);
        }}
      >
        Cancel
      </Button>
    </Form>
  );
}

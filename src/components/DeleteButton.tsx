import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Product } from "../data";

interface DeleteButtonProps {
  product: Product;
  onDelete: (id: string) => void;
}

export function DeleteButton({ product, onDelete }: DeleteButtonProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="danger"
        onClick={handleShow}
        data-cy="admin-remove-product"
      >
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You are about to delete this item. <br /> Are you sure?{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => onDelete(product.id)}
            data-cy="confirm-delete-button"
          >
            Delete
          </Button>{" "}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

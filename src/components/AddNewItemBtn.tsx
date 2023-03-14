import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Product } from "../../data";
import { NewProductForm } from "./NewProductForm";

interface AddNewItemBtnProps {
  setItems: React.Dispatch<React.SetStateAction<Product[]>>,
  items: Product[],
}

export function AddNewItemBtn( {setItems, items}: AddNewItemBtnProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} data-cy="admin-add-product">
        Add new item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewProductForm setItems={setItems} items={items}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

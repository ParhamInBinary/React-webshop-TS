import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../data";
import { NewProductForm } from "./NewProductForm";
// import { useNavigate } from "react-router-dom";

interface AddNewItemBtnProps {
  setItems: React.Dispatch<React.SetStateAction<Product[]>>,
  items: Product[],
}

export function AddNewItemBtn( {setItems, items}: AddNewItemBtnProps) {
  const params = useParams()
  
  const [show, setShow] = useState(params.createNewItem ? true : false);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/admin")
    setShow(false)
  };
  const handleShow = () => {
    navigate(`/admin/createNewItem`)
    setShow(true)
  };

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
          <NewProductForm handleClose={handleClose} setItems={setItems} items={items}/>
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

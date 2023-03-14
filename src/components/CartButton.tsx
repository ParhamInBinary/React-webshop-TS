import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsFillBasket3Fill } from "react-icons/bs";

export function CartButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="outline-primary"
        onClick={handleShow}
        style={{
          width: "3rem",
          height: "3rem",
          position: "relative",
          color: "white",
        }}
        className="rounded-circle"
      >
        <BsFillBasket3Fill></BsFillBasket3Fill>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem",
            backgroundColor: "#f8f9fa",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            {/* Map over cart items and display them here */}
          </div>
          <Button variant="primary" style={{ marginTop: "2rem" }}>
            Checkout
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

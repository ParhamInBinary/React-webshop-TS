import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsFillBasket3Fill } from "react-icons/bs";

import { products, Product } from "../data";

export function CartButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cartItems = products.length > 0 ? (
    products.map((product: Product) => (
      <div key={product.id} style={{display: "flex", alignItems: "center", margin: "1rem", width: "300px", borderBottom: "1px solid black"}}>
        <img src={product.image} alt={product.title} style={{width: "120px", height: "100px", objectFit: "cover", marginRight: "1rem"}} />
        <div>
          <div>{product.title}</div>
          <div>{product.price} kr</div>
        </div>
      </div>
    ))
  ) : (
    <div>Your cart is empty</div>
  );

  const totalCost = products.reduce((total, product) => total + Number(product.price), 0);

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
          <Offcanvas.Title>Cart</Offcanvas.Title>
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
          <h3>Your Cart</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            {cartItems}
          </div>
          <div>Total cost: {totalCost} kr</div>
          <Button variant="primary" style={{ marginTop: "2rem" }}>
            Checkout
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

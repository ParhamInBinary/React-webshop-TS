import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { BsFillBasket3Fill } from "react-icons/bs";
import { Product } from "../../data";
import { CartContext } from "../contexts/cartContext";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";

export function CartButton() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { cartItems } = useContext(CartContext); //changed here to make the number update
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    setTotalCost(
      cartItems.reduce(
        (total: number, product: Product) => total + Number(product.price),
        0
      )
    );
  }, []);

  const navigate = useNavigate();

  function handleRouteToCart() {
    navigate("/checkout");
  }

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
        <BsFillBasket3Fill />

        <div
          data-cy="cart-items-count-badge"
          style={{
            position: "absolute",
            bottom: "-5px",
            right: "-5px",
            backgroundColor: "red",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          {cartItems.length}
        </div>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
            backgroundColor: "#f8f9fa",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end" }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            {cartItems.length > 0 ? (
              cartItems.map((product: Product) => (
                <div
                  key={product.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "1rem",
                    width: "300px",
                    borderBottom: "1px solid black",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: "120px",
                      height: "100px",
                      objectFit: "cover",
                      marginRight: "1rem",
                    }}
                  />
                  <div>
                    <div>{product.title}</div>
                    <div>{product.price} kr</div>
                    <div>{product.size} kr</div>

                  </div>
                </div>
              ))
            ) : (
              <div>Your cart is empty</div>
            )}
          </div>
          <div data-cy="total-price">Total cost: {totalCost} kr</div>
          <Button
            data-cy="cart-link"
            variant="primary"
            style={{ marginTop: "2rem" }}
            onClick={handleRouteToCart}
          >
            Checkout
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

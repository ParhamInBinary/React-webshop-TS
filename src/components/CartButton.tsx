import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsFillBasket3Fill } from "react-icons/bs";
import { Product } from "../../data";

export function CartButton() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(items);
    setTotalCost(
      items.reduce(
        (total: number, product: Product) => total + Number(product.price),
        0
      )
    );
  }, []);

  const clearLocalStorage = () => {
    localStorage.clear();
    setCartItems([]);
    setTotalCost(0);
  };

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

      <Offcanvas show={show} onHide={handleClose} placement="end">
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
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              style={{ right: "0px", width: "80px" }}
              onClick={clearLocalStorage}
            >
              Clear
            </Button>
          </div>
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
                  </div>
                </div>
              ))
            ) : (
              <div>Your cart is empty</div>
            )}
          </div>
          <div data-cy="total-price">Total cost: {totalCost} kr</div>
          <Button variant="primary" style={{ marginTop: "2rem" }}>
            Checkout
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

import { useContext } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Product } from "../../data";
import { useCart } from "../contexts/cartContext";

interface CartBodyProps {
  cartItems: [];
  show: boolean;
  onHide: () => void;
  clear: () => void;
  totalCost: number
}

export function CartBody({ cartItems, show, onHide, clear, totalCost }: CartBodyProps) {
  const cart = useCart();
  console.log(cart.cartItems)

  return (
    <>
      <Offcanvas show={show} onHide={onHide} placement="end">
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
            <Button style={{ right: "0px", width: "80px" }} onClick={clear}>
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
                  key={product.id + product.size}
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
                    <div>Size: {product.size}</div>
                    <div style={{ marginTop: '1rem'}}>{product.price} kr</div>
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

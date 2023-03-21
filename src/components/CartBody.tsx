import { useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Product } from "../../data";

interface CartBodyProps {
  showCart: boolean;
  onHide: () => void;
  clear: () => void;
  totalCost: number;
  cartItems: Product[];
}

export function CartBody({ showCart, onHide, clear, totalCost }: CartBodyProps) {
  const [cartItems, setCartItems] = useState<Product[]>(() => {
    const cartItemsString = localStorage.getItem("cartItems");
    return cartItemsString ? JSON.parse(cartItemsString) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleClear = () => {
    setCartItems([]);
    clear();
  };

  return (
    <>
       <Offcanvas showCart={showCart} onHide={onHide} placement="start">
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
            <Button style={{ right: "0px", width: "80px" }} onClick={handleClear}>
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
          <Button data-cy="cart-link" variant="primary" style={{ marginTop: "2rem" }}>
            Checkout
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

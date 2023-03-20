import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Product } from "../../data";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export function CartPage() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState<[]>([]);
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
      };

    
  return (
    <body
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
    </body>
  );
}

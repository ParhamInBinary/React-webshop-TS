import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsFillBasket3Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Product } from "../../data";
import { useCart } from "../contexts/cartContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { CartBody } from "./CartBody";

export function CartButton() {
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

  function HandleRouteToCart(){
    navigate(`/cart/cartitem`)
  }

  const clearLocalStorage = () => {
    localStorage.clear();
    setCartItems([]);
    setTotalCost(0);
  };
  
  return (
    <>
      <Button
        data-cy="cart-link"
        variant="outline-primary"
        onMouseEnter={handleShow}
        onClick={HandleRouteToCart}
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
      <CartBody cartItems={cartItems} clear={clearLocalStorage} totalCost={totalCost}/>
    </>
  );
}

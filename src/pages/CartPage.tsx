import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/cartContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Product } from "../../data"; 

export function CartPage() {
  const navigate = useNavigate();
  const { cartItems, clearCart, cart } = useCart();
  const [totalCost, setTotalCost] = useState(0);
  const [, setCartItems] = useLocalStorage<Product[]>("cart", []);

  useEffect(() => {
    setCartItems(cartItems);
    setTotalCost(
      cartItems.reduce(
        (total: number, product: Product) => total + Number(product.price),
        0
      )
    );
  }, [cartItems, setCartItems]);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <main
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
          onClick={clearCart}
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

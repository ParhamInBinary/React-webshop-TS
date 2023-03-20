import { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Product } from "../../data";
import { SizeSelect } from "./SizeSelect";
import { ToastCart } from "../components/ToastCart";
import { CartContext } from "../contexts/cartContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(CartContext);//here is where the context is beeing used//dv
  const [quantity, setQuantity] = useState(1);
  const sizes = ["37", "38", "39", "40", "41", "42", "43", "44", "45", "46"];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [showToast, setShowToast] = useState(false);

  const handleCardClick = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const addToCart = () => {
    console.log("Adding product to cart:", product);
    const newCartItems = [...cartItems];
    for (let i = 0; i < quantity; i++) {
      newCartItems.push({ ...product, size: selectedSize });
    }
    setCartItems(newCartItems);
    setQuantity(1);
    setSelectedSize(sizes[0]);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <StyledCard data-cy="product">
      <StyledCardImg
        variant="top"
        src={product.image}
        onClick={handleCardClick}
      />
      <Card.Body
        className="card-body"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Card.Title data-cy="product-title">{product.title}</Card.Title>
              <Card.Text data-cy="product-price">
                Price: {product.price + " SEK"}
              </Card.Text>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <SizeSelect
                sizes={sizes}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            data-cy="decrease-quantity-button"
            variant="outline-secondary"
            onClick={() => setQuantity(Math.max(quantity - 1, 1))}
            style={{ marginRight: "1rem" }}
          >
            -
          </Button>
          <div>{quantity}</div>
          <Button
            data-cy="increase-quantity-button"
            variant="outline-secondary"
            onClick={() => setQuantity(quantity + 1)}
            style={{ marginLeft: "1rem" }}
          >
            +
          </Button>
          <Button
            data-cy="product-buy-button"
            variant="primary"
            onClick={addToCart}
            style={{ marginLeft: "auto" }}
          >
            Add to cart
          </Button>
        </div>
      </Card.Body>
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
  width: 22rem;
  margin-top: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
`;

const StyledCardImg = styled(Card.Img)`
  width: 18rem;
  margin-left: 2rem;
  cursor: pointer;

  @media only screen and (max-width: 420px) {
    margin-left: 7px;
  }
`;

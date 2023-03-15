import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Product } from "../../data";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);

  const handleCardClick = () => {
    navigate(`/products/${product.id}`, { state: { product } });
  };

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

    // Check if the product is already in the cart
    const index = cartItems.findIndex((item: Product) => item.id === product.id);

    if (index === -1) {
      // If the product is not in the cart, add it with the quantity
      cartItems.push({ ...product, quantity: count });
    } else {
      // If the product is in the cart, update the quantity
      cartItems[index].quantity += count;
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <StyledCard data-cy="product">
      <StyledCardImg
        variant="top"
        src={product.image}
        onClick={handleCardClick}
      />
      <Card.Body className="card-body">
        <Card.Title data-cy="product-title">{product.title}</Card.Title>
        <Card.Text data-cy="product-price">
          Price: {product.price + " SEK"}
        </Card.Text>
        <StyledCounter>
          <StyledCounterButton onClick={handleDecrement}>-</StyledCounterButton>
          <span  data-cy="cart-items-count-badge">{count}</span>
          <StyledCounterButton onClick={handleIncrement}>+</StyledCounterButton>
        </StyledCounter>
        <Button
          data-cy="product-buy-button"
          variant="primary"
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </Card.Body>
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
  width: 22rem;
  margin-top: 2rem;
`;

const StyledCardImg = styled(Card.Img)`
  width: 18rem;
  margin-left: 2rem;
  cursor: pointer;

  @media only screen and (max-width: 420px) {
    margin-left: 7px;
  }
`;

const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledCounterButton = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 50%;
  font-size: 1.2rem;
  margin: 0 0.5rem;
  cursor: pointer;
`;

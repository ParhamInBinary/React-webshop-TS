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
  const [quantity, setQuantity] = useState(1);

  const handleCardClick = () => {
    navigate(`/products/${product.id}`, { state: { product } });
  };

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    for (let i = 0; i < quantity; i++) {
      cartItems.push(product);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
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
        <Card.Text data-cy="product-price">Price: {product.price + ' SEK'}</Card.Text>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            data-cy="decrement-button"
            variant="outline-secondary"
            onClick={() => setQuantity(Math.max(quantity - 1, 1))}
            style={{ marginRight: "1rem" }}
          >
            -
          </Button>
          <div>{quantity}</div>
          <Button
            data-cy="increment-button"
            variant="outline-secondary"
            onClick={() => setQuantity(quantity + 1)}
            style={{ marginLeft: "1rem" }}
          >
            +
          </Button>
          <Button
            data-cy="product-buy-button"
            variant="primary"
            onClick={handleAddToCart}
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
`;

const StyledCardImg = styled(Card.Img)`
  width: 18rem;
  margin-left: 2rem;
  cursor: pointer;

  @media only screen and (max-width: 420px) {
    margin-left: 7px;
  }
`;

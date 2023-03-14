import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Product } from "../data";

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

export function ProductCard({ product, addToCart }: ProductCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${product.id}`, { state: { product } });
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card style={{ width: "22rem", marginTop: "2rem" }}>
      <Card.Img
        variant="top"
        src={product.image}
        style={{ width: "18rem", marginLeft: "2rem", cursor: 'pointer' }}
        onClick={handleCardClick}
      />
      <Card.Body className="card-body">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>Price: {product.price + ' SEK'}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

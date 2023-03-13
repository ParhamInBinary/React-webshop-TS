import { useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Product } from "../data";
import { AddtoCartFunction } from "./AddToCartFunction";



interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

export function ProductCard({ product, addToCart }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${product.id}`, { state: { product } });
  };

  return (
    <Card style={{ width: "22rem", marginTop: "2rem" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <Card.Img
        variant="top"
        src={product.image}
        style={{ width: "18rem", marginLeft: "2rem", cursor: 'pointer' }}
      />
      <Card.Body className="card-body">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price + ' SEK'}</Card.Text>
        <Card.Text>{hovered ? product.description : null}</Card.Text>
        <AddtoCartFunction product={product} addToCart={addToCart} />
      </Card.Body>
    </Card>
  );
}

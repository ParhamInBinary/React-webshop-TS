import { Button, Card } from "react-bootstrap";
import './index.css';

export function ProductCard({ product }: any) {
  return (
    <Card className="card" style={{ width: "22rem" }}>
      <Card.Img variant="top" src={product.image} style={{ width: "18rem", marginLeft: '2rem'}} />
      <Card.Body className="card-body">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

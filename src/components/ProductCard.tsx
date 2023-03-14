import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
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
    <StyledCard>
      <StyledCardImg
        variant="top"
        src={product.image}
        onClick={handleCardClick}
      />
      <Card.Body className="card-body">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>Price: {product.price + ' SEK'}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>Add to cart</Button>
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
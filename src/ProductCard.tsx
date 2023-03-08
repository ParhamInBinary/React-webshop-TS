import { Button, Card } from 'react-bootstrap';

export function ProductCard( {product}:any ) {
  return (
        
        <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    
  );
}
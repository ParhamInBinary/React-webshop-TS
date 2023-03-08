import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function ProductCard({ product }: any) {
  return (
    <Card style={{ width: "22rem", marginTop: "2rem"}}>
      <Card.Img variant="top" src={product.image} style={{ width: "18rem", marginLeft: '2rem'}} />
      <Card.Body className="card-body">
        <Card.Title><Link to={""}>{product.title}</Link></Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

//Link needs to lead to Product page of the ID of the product we clicked on
//

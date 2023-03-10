import { Button, Col } from "react-bootstrap";
import styled from "styled-components";
import { Product } from "../data";

interface Props {
  product: Product;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export function ProductListedItem({ product, onDelete, onEdit }: Props) {
  return (
    <>
      <Col xs={3}>
        <img src={product.image} />
        {product.title}
      </Col>

      <Col xs={4}>{product.description}</Col>

      <Col>
        <Price>{product.price + " SEK"}</Price>
      </Col>

      <Col>
        <Button variant="danger" onClick={() => onDelete(product.id)}>
          Delete
        </Button>{" "}
        <Button variant="outline-secondary" onClick={() => onEdit(product.id)}>
          Edit
        </Button>
      </Col>
    </>
  );
}

const Price = styled.span`
  margin-left: 1rem;
  font-weight: bold;
`;

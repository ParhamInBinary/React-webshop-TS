import { Button, Col } from "react-bootstrap";
import styled from "styled-components";
import { Product } from "../data";
import { DeleteButton } from "./DeleteButton";

interface ProductListedItemProps {
  product: Product;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export function ProductListedItem({
  product,
  onDelete,
  onEdit,
}: ProductListedItemProps) {
  return (
    <>
      <Col xs={3}>
        <TitleContainer data-cy="product-title">
          <img src={product.image} />
          {product.title}
        </TitleContainer>
      </Col>

      <Col xs={4}>
        <DescContainer data-cy="product-description">
          {product.description}
        </DescContainer>
      </Col>

      <Col>
        <Price data-cy="product-price">{product.price + " SEK"}</Price>
      </Col>

      <Col>
        <DeleteButton product={product} onDelete={onDelete} />{" "}
        <Button
          variant="outline-secondary"
          onClick={() => onEdit(product.id)}
          data-cy="admin-edit-product"
        >
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

const TitleContainer = styled.div`
  overflow-x: scroll;
  align-items: center;
`;

const DescContainer = styled.div`
  height: 8rem;
  overflow-y: scroll;
`;

import { Button, Col } from "react-bootstrap";
import styled from "styled-components";
import { Product } from "../../data";

interface Props {
  product: Product;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export function ProductListedItem({ product, onDelete, onEdit }: Props) {
  return (
    <>
      <Col xs={3}>
        <TitleContainer>
          <img src={product.image} />
          {product.title}
        </TitleContainer>
      </Col>

      <Col xs={4}>
        <DescContainer>

        {product.description}
        </DescContainer>
        </Col>

      <Col>
        <Price>{product.price + " SEK"}</Price>
      </Col>

      <Col>
        <Button variant="danger" onClick={() => onDelete(product.id)} data-cy="admin-remove-product">
          Delete
        </Button>{" "}
        <Button variant="outline-secondary" onClick={() => onEdit(product.id)} data-cy="admin-edit-product">
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
  
  const DescContainer = styled.div `
  height: 8rem;
  overflow-y: scroll;
`

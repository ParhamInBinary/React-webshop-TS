import { Button, Col } from "react-bootstrap";
import styled from "styled-components";
import { Product } from "../../data";
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
    <Container>

      <Col xs={12} md={3}>
        <TitleContainer data-cy="product-title">
          <img src={product.image} />
          <p>{product.title}</p>
        </TitleContainer>
      </Col>

      <Col xs={12} md={4}>
        <DescContainer data-cy="product-description">
          {product.description}
        </DescContainer>
      </Col>

      <Col>
        <Price data-cy="product-price">{product.price + " SEK"}</Price>
      </Col>

      <Col>
        <BtnContainer>
          <DeleteButton product={product} onDelete={onDelete} />{" "}
          <Button
            variant="outline-secondary"
            onClick={() => onEdit(product.id)}
            data-cy="admin-edit-product"
          >
            Edit
          </Button>
        </BtnContainer>
      </Col>
    </Container>
    </>
  );
}

const Container = styled.div `
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TitleContainer = styled.div`
  align-items: center;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const DescContainer = styled.div`
  height: 8rem;
  overflow-y: scroll;
  
  @media (max-width: 768px) {
    height: auto;
  }
`;

const Price = styled.span`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

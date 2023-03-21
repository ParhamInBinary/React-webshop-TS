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
  console.log(product.title)
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
          <ProductID data-cy="product-id" >{product.id}</ProductID>
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

const Container = styled.div`
display: flex;
border-bottom: 1px solid orange;
font-size: 14px;
padding: 1rem;

& img {
  width: 3rem;
  margin: 1rem;

  @media (max-width: 768px) {
    width: 10rem;
  }
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

const ProductID = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
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

import { Button, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { SizeSelect } from "../components/SizeSelect";

export function ProductPage() {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div>
      <Card>
        <Container className="mb-5 mt-5">
          <Image src={product.image} alt={product.title} />
          <ContentDetails>
            <Title data-cy="product-title">{product.title}</Title>
            <Description data-cy="product-description">
              {product.description}
            </Description>
            <Styledp data-cy="product-price">
              Price: {product.price} SEK
            </Styledp>
            <div>
              <SizeSelect />
            </div>
            <AddToCartButton data-cy="product-buy-button" variant="primary">
              Add to cart
            </AddToCartButton>
          </ContentDetails>
        </Container>
      </Card>
    </div>
  );
}

const Styledp = styled.p`
  font-weight: bold;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 10px 1.3rem;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 490px;
  object-fit: cover;
`;

const ContentDetails = styled.div`
  flex: 1;
  margin-left: 20px;

  @media (max-width: 420px) {
    margin-left: 5px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Description = styled.p`
  font-size: 16px;
`;

const AddToCartButton = styled(Button)`
  margin-top: 20px;
`;

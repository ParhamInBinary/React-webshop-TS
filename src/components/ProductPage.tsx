import { useLocation } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";

export function ProductPage() {
  const location = useLocation();
  const { product } = location.state;
  const sizes = ["37", "38", "39", "40", "41", "42", "43", "44", "45", "46"];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div>
      <Card>
        <Container className="mb-5 mt-5">
          <Image src={product.image} alt={product.title} />
          <ContentDetails>
            <Title>{product.title}</Title>
            <Description>{product.description}</Description>
            <Styledp>Price: {product.price} SEK</Styledp>
            <div>
              <SizeLabel htmlFor="size">Size:</SizeLabel>
              <SizeSelect
                id="size"
                value={selectedSize}
                onChange={(event) => setSelectedSize(event.target.value)}
              >
                {sizes.map((size) => (
                  <option key={size}>{size}</option>
                ))}
              </SizeSelect>
            </div>
            <AddToCartButton variant="primary">Add to cart</AddToCartButton>
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
  padding: 0px 1.5rem;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 490px;
  object-fit: cover;
`;

const ContentDetails = styled.div`
  flex: 1;
  margin-left: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Description = styled.p`
  font-size: 16px;
`;

const SizeSelect = styled.select`
  margin-top: 10px;
  padding: 10px;
`;

const SizeLabel = styled.label`
  margin-right: 10px;
`;

const AddToCartButton = styled(Button)`
  margin-top: 20px;
`;
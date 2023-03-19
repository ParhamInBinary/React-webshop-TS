import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { SizeSelect } from "../components/SizeSelect";
import Carousel from "react-bootstrap/Carousel";

export function ProductPage() {
  const location = useLocation();
  const { product } = location.state;
  const sizes = ["37", "38", "39", "40", "41", "42", "43", "44", "45", "46"];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    cartItems.push({ ...product, size: selectedSize });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setSelectedSize(sizes[0]);
  };

  return (
    <div>
  <Card>
    <Container className="mb-5 mt-5">
      <Row>
        <Col lg={6}>
          <Carousel
            variant="dark"
            interval={null}
            className="d-flex justify-content-center"
          >
            <Carousel.Item>
              <img
                className="w-100"
                src={product.image}
                alt={product.title}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="w-100"
                src={product.image}
                alt={product.title}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="w-100"
                src={product.image}
                alt={product.title}
              />
            </Carousel.Item>
          </Carousel>{" "}
        </Col>
        <Col lg={6}>
          <ContentDetails>
            <Title data-cy="product-title">{product.title}</Title>
            <Description data-cy="product-description">
              {product.description}
            </Description>
            <Styledp data-cy="product-price">
              Price: {product.price} SEK
            </Styledp>
            <div>
              <SizeSelect
                sizes={sizes}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
            </div>
            <AddToCartButton
              data-cy="product-buy-button"
              variant="primary"
              onClick={handleAddToCart}
            >
              Add to cart
            </AddToCartButton>
          </ContentDetails>
        </Col>
      </Row>
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

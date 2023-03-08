import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import { products } from "../data";

export function Admin() {
  return (
    <Container>
      <ListHeader>
        <Row>
          <Col xs={3}>Title</Col>
          <Col xs={4}>Description</Col>
          <Col>Price</Col>
          <Col>Id</Col>
        </Row>
      </ListHeader>
      <Row>
        {products.map((product) => (
          <ProductItem key={product.id}>
            <Col xs={3}>
              <img src={product.image} />
              {product.title}
            </Col>

            <Col xs={4}>
              <DescContainer>{product.description}</DescContainer>
            </Col>

            <Col>
              <Price>{product.price + " :-"}</Price>
            </Col>

            <Col>
            {product.id}
            </Col>
          </ProductItem>
        ))}
      </Row>
    </Container>
  );
}

const ListHeader = styled.div `
  font-weight: bold;
  padding: 1rem;
  border: 1px solid orange;
`

const ProductItem = styled.div`
  display: flex;
  border-bottom: 1px solid orange;
  font-size: 14px;
  padding: 1rem;

  & img {
    width: 3rem;
    margin: 1rem;
  }

`;

const DescContainer = styled.div`
    max-height; 1rem;
    overflow: scroll;
`;

const Price = styled.span`
  margin-left: 1rem;
  font-weight: bold;
`;

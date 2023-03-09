import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import { AddNewItemBtn } from '../components/AddNewItem';
import { products } from "../data";

export function Admin() {
  const [items, setItems] = useState(products)

  useEffect(() => {
    const storedProducts = localStorage.getItem('products')
    if (storedProducts) {
      setItems(JSON.parse(storedProducts))
    }
  }, [])

  const handleDelete = (id: string) => {
    const updatedItems = items.filter((item) => item.id !== id)
    setItems(updatedItems)
    localStorage.setItem('products', JSON.stringify(updatedItems))
  }

  return (
    <Container>
      <AddBtnContainer>
        <AddNewItemBtn />
      </AddBtnContainer>
      <ListHeader>
        <Row>
          <Col xs={3}>Title</Col>
          <Col xs={4}>Description</Col>
          <Col>Price</Col>
          <Col>Delete/Edit</Col>
        </Row>
      </ListHeader>
      <Row>
        {items.map((product) => (
          <ProductItem key={product.id}>
            <Col xs={3}>
              <img src={product.image} />
              {product.title}
            </Col>

            <Col xs={4}>
              {product.description}
            </Col>

            <Col>
              <Price>{product.price + ' :-'}</Price>
            </Col>

            <Col>
              <Button variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button>{' '}
              <Button variant="outline-secondary">Edit</Button>
            </Col>
          </ProductItem>
        ))}
      </Row>
    </Container>
  );
}

const AddBtnContainer = styled.div `
  display: flex;
  justify-content: flex-end;
  padding: 0 1rem;
  width: 100%;
  margin-bottom: 1rem;
`

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

const Price = styled.span`
  margin-left: 1rem;
  font-weight: bold;
`;

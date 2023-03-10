import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import { AddNewItemBtn } from "../components/AddNewItemBtn";
import { ProductListedItem } from "../components/ProductListedItem";
import { products } from "../data";

export function Admin() {
  const [items, setItems] = useState(products);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setItems(JSON.parse(storedProducts));
    }
  }, []);

  const handleDelete = (id: string) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("products", JSON.stringify(updatedItems));
  };

  const handleEdit = (id: string) => {};

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
            <ProductListedItem
              product={product}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          </ProductItem>
        ))}
      </Row>
    </Container>
  );
}

const AddBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 1rem;
  width: 100%;
  margin-bottom: 1rem;
`;

const ListHeader = styled.div`
  font-weight: bold;
  padding: 1rem;
  border: 1px solid orange;
`;

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

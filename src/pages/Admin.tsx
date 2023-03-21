import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Product } from "../../data";
import { EditForm } from "../components/EditForm";
import { ProductListedItem } from "../components/ProductListedItem";

interface AdminProps {
  items: Product[];
  setItems: React.Dispatch<React.SetStateAction<Product[]>>;
}

export function Admin({ items, setItems }: AdminProps) {
  const [editingItem, setEditingItem] = useState<Product | null>(null);

  const navigate = useNavigate();

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

  const handleEdit = (id: string) => {
    const itemToEdit = items.find((item) => item.id === id);
    if (itemToEdit) {
      navigate(`/admin/product/${itemToEdit.id}/editItem`);
      setEditingItem(itemToEdit);
    } else {
      setEditingItem(null);
    }
  };

  const handleSave = (editedItem: Product) => {
    const updatedItems = items.map((item) =>
      item.id === editedItem.id ? editedItem : item
    );
    navigate("/admin");
    setItems(updatedItems);
    setEditingItem(null);
    localStorage.setItem("products", JSON.stringify(updatedItems));
  };

  return (
    <Container>
      <AddBtnContainer>
        <Button
          variant="primary"
          onClick={() => navigate(`/admin/product/new`)}
          data-cy="admin-add-product"
        >
          Add new item
        </Button>
      </AddBtnContainer>
      <ListHeader>
        <Row>
          <Col xs={3}>Title</Col>
          <Col xs={4}>Description</Col>
          <Col>Price</Col>
          <Col>Id</Col>
        </Row>
      </ListHeader>
      <ListHeaderMediaQ>
        <Col>Listed products</Col>
      </ListHeaderMediaQ>
      {editingItem ? (
        <EditForm
          item={editingItem}
          onSave={handleSave}
          onCancel={() => {
            navigate("/admin");
            setEditingItem(null);
          }}
        />
      ) : (
        <Row>
          {items.map((product) => (
            <ProductItem key={product.id} data-cy="product">
              <ProductListedItem
                product={product}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            </ProductItem>
          ))}
        </Row>
      )}
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const ListHeaderMediaQ = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-weight: bold;
    padding: 1rem;
    border: 1px solid orange;
  }
`;

const ProductItem = styled.div`
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

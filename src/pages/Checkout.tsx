import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Product } from "../../data";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrderForm } from "../components/OrderForm";
import styled from "styled-components";

export function CartPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<[]>([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(items);
    setTotalCost(
      items.reduce(
        (total: number, product: Product) => total + Number(product.price),
        0
      )
    );
  }, []);

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <CartContainer>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          style={{ right: "0px", width: "80px" }}
          onClick={clearLocalStorage}
        >
          Clear
        </Button>
      </div>
      <ProductsContainer>
        {cartItems.length > 0 ? (
          cartItems.map((product: Product) => (
            <ProductItem key={product.id}>
              <ProductImage src={product.image} alt={product.title} />
              <ProductDetails>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.price} kr</ProductPrice>
              </ProductDetails>
            </ProductItem>
          ))
        ) : (
          <div>Your cart is empty</div>
        )}
      </ProductsContainer>
      <TotalPrice data-cy="total-price">Total cost: {totalCost} kr</TotalPrice>
      <OrderForm />
    </CartContainer>
  );
}

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #f8f9fa;
`;


const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
`;

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  width: 100%;
  border-bottom: 1px solid black;
`;

const ProductImage = styled.img`
  width: 120px;
  height: 100px;
  object-fit: cover;
  margin-right: 1rem;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ProductPrice = styled.div`
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;

const TotalPrice = styled.div`
  margin-bottom: 4rem;
`;
import styled from "styled-components";
import { useOrderContext } from "../contexts/OrderContext";

export function ConfirmationPage() {
  const { orderDetails } = useOrderContext();
  return (
    <ConfirmationContainer>
      <h1>Thank you for your purchase!</h1>
      <div>
        <p>Here are your order details:</p>
        <p>{orderDetails.name}</p>
        <p>{orderDetails.email}</p>
        <p>{orderDetails.phone}</p>
        <p>{orderDetails.address}</p>
        <p>{orderDetails.city}</p>
        <p>{orderDetails.zip}</p>
      </div>
    </ConfirmationContainer>
  );
}

const ConfirmationContainer = styled.div`
margin: 10px 1rem;
`;

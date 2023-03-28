import { createContext, PropsWithChildren, useContext, useState } from "react";
import { OrderDetails } from "../components/OrderForm";
import { useCart } from "./cartContext";

interface OrderContextType {
  orderDetails: OrderDetails;
  setOrderDetails: (values: Partial<OrderDetails>) => void;
}

const OrderContext = createContext({} as OrderContextType);

export function useOrderContext() {
  return useContext(OrderContext);
}

export function OrderProvider({ children }: PropsWithChildren) {
  const { cartItems } = useCart();

  const [orderDetails] = useState<OrderDetails>({
    name: "",
    address: "",
    city: "",
    zip: "",
    email: "",
    phone: "",
  });

  const setOrderDetails = (values: Partial<OrderDetails>) => {
    // setOrderDetails({...orderDetails, ...values,})
  };

  return (
    <OrderContext.Provider value={{ orderDetails, setOrderDetails }}>
      {children}
    </OrderContext.Provider>
  );
}

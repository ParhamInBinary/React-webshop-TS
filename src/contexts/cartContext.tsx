// cartContext.tsx
import { createContext, useContext, useState } from "react";
import { string } from "yup";
import { Product } from "../../data";
import { ToastCart } from "../components/ToastCart";

type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
  setCartItems: (items: Product[]) => void; 
  showToast: boolean;
  
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  clearCart: () => {},
  setCartItems: () => {},
  showToast: false,
});

export function useCart() {
  return useContext(CartContext);
}

export default function CartProvider(props: React.PropsWithChildren<{}>) {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [showToast, setShowToast] = useState(false);

  const addToCart = (product: Product) => {
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex];
      setCartItems(updatedCartItems);
    } else {
      const newCartItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
    setShowToast(true);
    console.log('showToast:', showToast);
    setTimeout(() => setShowToast(false), 5000);
  };

  const removeFromCart = (productId: string) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // new function add here for value
  const contextValue = {
    cartItems,
    addToCart,
    clearCart,
    setCartItems, 
    cart: cartItems,
    showToast,
    setShowToast,
    removeFromCart
  };

  return (
    <CartContext.Provider value={
      contextValue}>
      {props.children}
    </CartContext.Provider>
  );
}

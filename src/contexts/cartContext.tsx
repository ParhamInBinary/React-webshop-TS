// cartContext.tsx
import { createContext, useContext, useState } from "react";
import { Product } from "../../data";
import { ToastCart } from "../components/ToastCart";

type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
  setCartItems: (items: Product[]) => void;
  cart: Product[]; // add this property to the CartContextType
  showToast: boolean;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>; // add this property to the CartContextType
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  clearCart: () => {},
  setCartItems: () => {},
  cart: [], // initialize cart property to empty array
  showToast: false,
  setShowToast: () => {}, // initialize setShowToast property to an empty function
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
    setTimeout(() => setShowToast(false), 5000);
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
    cart: cartItems, // set the value of the cart property to cartItems
    showToast,
    setShowToast,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
}

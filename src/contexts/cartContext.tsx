// cartContext.tsx
import React, { createContext, PropsWithChildren, useContext, useState } from "react";
import { CartItem, Product } from "../../data";
import { useLocalStorage } from "../hooks/useLocalStorage";


interface CartContextValue  {
  cartItems: Product[];
  addToCart: (cartItem: CartItem) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
  showToast: boolean;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>; // add this property to the CartContextType
  totalCost: Number;
  totalQuantity: number;
};

export const CartContext = createContext({} as CartContextValue)


export function useCart() {
  return useContext(CartContext);
}

export default function CartProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cartItems", []);
  const [showToast, setShowToast] = useState(false);
  const totalQuantity = 0 //ändra sen

  // totalkostnad uträknad från cartItems
  const totalCost = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );


  const addToCart = (cartItem: CartItem) => {
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === cartItem.id
    );

    if (existingProductIndex >= 0) {
      const updatedCartItems = [...cartItems];
      // increase the quantity of the existing product
      // Använd en map,
      updatedCartItems[existingProductIndex].quantity + cartItem.quantity; // muterar statet
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, cartItem]);
    }
    setShowToast(true);
  };

  const clearCart = () => {
    setCartItems([]);
  };
  const removeFromCart = () => {
    console.log("Not implemented yet...")
    // setCartItems([]);
  };

  console.log(cartItems);
  
  return (
    <CartContext.Provider value={{ cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      showToast,
      setShowToast,
      totalCost,
      totalQuantity,
       }}>
      {children}
    </CartContext.Provider>
  );
}


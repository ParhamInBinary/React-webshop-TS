import { createContext, useContext, useState, PropsWithChildren } from "react";
import { CartItem } from "../../data";

// Kontexten är ett alternativ till Props!
interface VadSkaViSkickaÖverKontexten {
  cartItems: CartItem[];
  // addToCart
  // removeFromCart
}

const CartContext = createContext<VadSkaViSkickaÖverKontexten>(null as any);
export const useCart = () => useContext(CartContext);

export default function CartProvider(props: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  /* Hur lägger till, uppdater, tar bort */


  return (
    <CartContext.Provider value={{ cartItems }}>
      {props.children}
    </CartContext.Provider>
  )
}
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { CartItem, Product } from "../../data";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface CartContextValue {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCart: (cartItem: CartItem) => void;
  removeFromCart: (product: Product) => void;
  updateCartItemQuantity: (ProductId: string, quantity: number) => void;
  UpdateTotalQuantity: () => void;
  showToast: boolean;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
  totalCost: number;
  totalCartCount: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  quantity: number;
}

export const CartContext = createContext({} as CartContextValue);
export function useCart() {
  return useContext(CartContext);
}

export default function CartProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cart", []);
  const [showToast, setShowToast] = useState(false);
  const [totalCartCount, setTotalCartCount] = useState(0);
  const [quantity, setQuantity] = useState(1);

  function updateCartItemQuantity(ProductId: string, quantity: number): void {
    const cartJson = localStorage.getItem("cart");
  
    if (cartJson) {
      const cart = JSON.parse(cartJson);
  
      const productIndex = cart.findIndex((item: any) => item.id === ProductId);
  
      if (productIndex !== -1) {
        cart[productIndex].quantity = quantity;
        localStorage.setItem("cart", JSON.stringify(cart));
        return cart[productIndex].quantity
      } else {
        console.log(`Product with ID ${ProductId} not found in cart`);
      }
    } else {
      console.log("Cart not found in local storage");
    }
  }

  function UpdateTotalQuantity() {
    let count = 1;
    cartItems.forEach((item) => {
      count += item.quantity;
    });
    setTotalCartCount(count);
  }
  // calculate total quantity

  // calculate total cost
  // calculate total cost
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
      updatedCartItems[existingProductIndex] = {
        ...updatedCartItems[existingProductIndex],
        quantity:
          updatedCartItems[existingProductIndex].quantity + cartItem.quantity,
      };
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, cartItem]);
    }
    setShowToast(true);
    UpdateTotalQuantity();
  };

  const removeFromCart = () => {
    UpdateTotalQuantity();
    // setCartItems([]);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      setCartItems,
      addToCart,
      removeFromCart,
      updateCartItemQuantity,
      UpdateTotalQuantity,
      showToast,
      setShowToast,
      totalCost,
      totalCartCount,
      quantity,
      setQuantity,
    }}>
      {children}
    </CartContext.Provider>
  );
}

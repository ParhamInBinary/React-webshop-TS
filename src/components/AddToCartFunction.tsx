import { useState } from "react";
import { Button } from "react-bootstrap";
import { Product } from "../data";

interface AddtoCartFunctionProps {
  product: Product;
  addToCart: (product: Product, quantity: number) => void;
}

export function AddtoCartFunction({ product, addToCart }: AddtoCartFunctionProps) {
  const [cart, setCart] = useState<{ product: Product, quantity: number }[]>([]);

  const handleAddToCart = () => {
    const existingProduct = cart.find((p) => p.product.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((p) => p.product.id === product.id ? {...p, quantity: p.quantity + 1 } : p)
      );
    } else {
      setCart([...cart, { product, quantity: 1 }]);
      addToCart(product, 1); // call addToCart function here
    }
  };

  return (
    <Button variant="primary" onClick={handleAddToCart}>
      Add to cart
    </Button>
  );
}

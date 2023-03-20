import { useEffect, useState, useRef } from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { Product } from "../../data";


interface CartBodyProps {
  clear: () => void;
  totalCost: number;
  cartItems: Product[];
}

export function CartBody({ clear, totalCost, cartItems }: CartBodyProps) {
  const [show, setShow] = useState(false);
  const targetRef = useRef(null);

  const handleClear = () => {
    clear();
  };

  const popover = (
  );
}

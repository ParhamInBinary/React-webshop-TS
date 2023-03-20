import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer, { ToastPosition } from "react-bootstrap/ToastContainer";
import { Product } from "../../data";
import { useCart } from "../contexts/cartContext";

interface ToastCartProps {
  product: Product;
  showToast: boolean;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ToastCart(props: ToastCartProps) {
    
    const { addToCart } = useCart();
    const [position, setPosition] = useState<ToastPosition>('top-end');
  
    const AddToCart = () => {
      addToCart(props.product);
      props.setShowToast(true);
      setTimeout(() => props.setShowToast(false), 5000);
    };
  
    
 
  return (
    <ToastContainer position={position}>
      <Toast show={props.showToast} onClose={() => props.setShowToast(false)}>
        <Toast.Header closeButton={true}>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{props.product.title}</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body>Added to cart!</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

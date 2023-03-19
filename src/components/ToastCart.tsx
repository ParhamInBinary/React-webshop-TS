import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { useCart } from "../contexts/cartContext";
import { CartItem, Product } from "../../data";

interface ToastCartProps {
  product: Product;
  showToast: boolean;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ToastCart(props: ToastCartProps) {
    console.log("showToast:", props.showToast);
    const { addToCart } = useCart();
    const [position, setPosition] = useState('top-end');
  
    const AddToCart = () => {
      addToCart(props.product);
      props.setShowToast(true);
      setTimeout(() => props.setShowToast(false), 5000);
    };
  
    console.log("Rendering ToastCart...");
 
  return (
    <ToastContainer position="top-end">
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

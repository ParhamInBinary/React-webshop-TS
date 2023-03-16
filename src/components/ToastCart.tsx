import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

interface ToastCartProps {
    onAddToCart: () => void;
    setShowToast: (value: boolean) => void;
  }

  export function ToastCart({ onAddToCart }: ToastCartProps) {
    const [showToast, setShowToast] = useState(false);
  
    const handleAddToCart = () => {
      console.log("Adding to cart...");
      onAddToCart();
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
      console.log("showToast:", showToast);
      const [position, setPosition] = useState('top-right');
    };
  
    console.log("Rendering ToastCart...");    
    
    
  return (
    <ToastContainer>
      <Toast show={showToast} onClose={() => setShowToast(false)}>
        <Toast.Header closeButton={true}>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body>See? Just like this.</Toast.Body>
      </Toast>
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">2 seconds ago</small>
        </Toast.Header>
        <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
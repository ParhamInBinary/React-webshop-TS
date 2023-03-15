import { useState } from "react";
import { Toast, ToastHeader, ToastBody, Button } from 'react-bootstrap';

interface ToastCartProps {
    onAddToCart: () => void;
}

export function ToastCart({ onAddToCart }: ToastCartProps) {
    const [showToast, setShowToast] = useState(false);

    const handleAddToCart = () => {
        onAddToCart();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
    }

    return (
        <>
            <Button variant="primary" onClick={handleAddToCart}>Add to cart</Button>
            <Toast show={showToast} onClose={() => setShowToast(false)}>
                <ToastHeader closeButton={true}>
                    Product added to cart!
                </ToastHeader>
                <ToastBody>
                    Your selected product has been added to the cart.
                </ToastBody>
            </Toast>
        </>
    );
}

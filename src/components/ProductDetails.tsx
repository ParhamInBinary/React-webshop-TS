import { useLocation } from 'react-router-dom';

export function ProductDetails() {
    const location = useLocation();
    const { product } = location.state;

    return (
        <>
        <img src={product.image} alt={product.title} />
        <h1>{ product.title }</h1>
        <p>{ product.description }</p>
        <p>Price: { product.price } SEK</p>
        </>
    );
}
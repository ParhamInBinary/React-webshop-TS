import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export function ProductDetails() {
    const location = useLocation();
    const { product } = location.state;

    return (
        <>
        <img src={product.image} alt={product.title} />
        <h1>{ product.title }</h1>
        <p>{ product.description }</p>
        <Styledp>Price: { product.price } SEK</Styledp>
        </>
    );
}

const Styledp = styled.p `
    font-weight: bold;
`
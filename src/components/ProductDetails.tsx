import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export function ProductDetails() {
    const location = useLocation();
    const { product } = location.state;

    return (
        <Card>
            <Container>
            <Image src={product.image} alt={product.title} />
            <h1>{ product.title }</h1>
            <p>{ product.description }</p>
            <Styledp>Price: { product.price } SEK</Styledp>
            </Container>
        </Card>
    );
}

const Styledp = styled.p `
    font-weight: bold;
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0px 1.5rem;
  margin-bottom: 1rem;
`;

const Image = styled.img `
    width: 100%;
    max-width: 490px;
    object-fit: cover;
`
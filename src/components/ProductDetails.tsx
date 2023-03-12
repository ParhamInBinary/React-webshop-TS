import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export function ProductDetails() {
    const location = useLocation();
    const { product } = location.state;

    return (
        <ContentDiv>
            <Card>
            <Container>
            <Image src={product.image} alt={product.title} />
            <Title>{ product.title }</Title>
            <Description>{ product.description }</Description>
            <Styledp>Price: { product.price } SEK</Styledp>
            </Container>
            </Card>
        </ContentDiv>
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

const Title = styled.h1 `
    font-size: 20px;
`

const ContentDiv = styled.div `
    margin-bottom: 6rem;
    margin-top: 6rem;
`

const Description = styled.p `
    font-size: 12px;
`
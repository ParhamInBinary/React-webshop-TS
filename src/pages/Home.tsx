import { products } from "../data/index";
import { ProductCard } from "../ProductCard";
import styled from "styled-components";

export function Home() {
    return (
      <>
        <div>
          <h1>Produkt Lista</h1>
        </div>
        <ProductContainer>
        {products.map((product) => (
          <ProductCard product={product}/>
        ))}
        </ProductContainer>
      </>
    );
  }

  
  const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 2rem;
  `

import { products } from "../data/index";
import { ProductCard } from "../components/ProductCard";
import styled from "styled-components";

export function Home() {
    return (
      <>
      <main>
        <div>
          <h1>Produkt Lista</h1>
        </div>
        <ProductContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
        </ProductContainer>
      </main>
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

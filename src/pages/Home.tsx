import { useEffect, useState } from "react";
import styled from "styled-components";
import { ProductCard } from "../components/ProductCard";
import { Product } from "../data/index";

export function Home() {
    const [items, setItems] = useState<Product[]>([])

    useEffect(() => {
    const storedProducts = localStorage.getItem('products')
    if (storedProducts) {
      setItems(JSON.parse(storedProducts))
    }
  }, [])
    return (
      <>
      <main>
        <div>
          <h1>Produkt Lista</h1>
        </div>
        <ProductContainer>
        {items.map((product) => (
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

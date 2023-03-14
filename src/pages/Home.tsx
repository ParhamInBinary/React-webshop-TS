import { useEffect, useState } from "react";
import styled from "styled-components";
import { ProductCard } from "../components/ProductCard";
import { Product, products } from "../data/index";

export function Home() {
    const [items, setItems] = useState<Product[]>([])

    useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products') ?? "[]")
      setItems(storedProducts.length > 0 ? storedProducts : products)
  }, [])
  
    return (
      <>
      <main>
        <div>
          <Heading>PALIMEDA Shoes</Heading>
        </div>
        <ProductContainer>
        {items.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={function (product: Product): void {
            throw new Error("Function not implemented.");
          } }/>
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
  `

  const Heading = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
  text-align: center;
  color: #333;
  -webkit-text-stroke: 1px #fff;
`;


// **Home**

// - [ ] Ska ha en övergripande layout med header, main & footer.
// - [x] Startsidan ska lista samtliga produkter.
// - [ ] Det ska gå att lägga till produkter i kundvagnen (header + toast + ls).
// - [ ] Det ska gå att klicka på en produkt och komma till en detaljsida.
// - [x] Sidan ska vara responsiv och gå att använda på mobil, tablet & desktop.

// **Produkt**

// - [ ] Ska ha en övergripande layout med header, main & footer.
// - [ ] Detaljsidan ska visa all info om en produkt.
// - [ ] Det ska gå att lägga till produkten i kundvagnen (header + toast + ls).
// - [ ] Sidan ska vara responsiv och gå att använda på mobil, tablet & desktop.
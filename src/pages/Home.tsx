import { useEffect, useState } from "react";
import { Product, products } from "../data/index";
import { ProductCard } from "../components/ProductCard";
import styled from "styled-components";

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
    margin-top: 2rem;
  `


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
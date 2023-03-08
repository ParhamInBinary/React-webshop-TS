import { products } from "../data/index";
import { ProductCard } from "../ProductCard";


export function Home() {
    return (
      <>
        <div>
          <h1>Produkt Lista</h1>
        </div>
        {products.map((product) => (
          <ProductCard product={product}/>
        ))}
      </>
    );
  }
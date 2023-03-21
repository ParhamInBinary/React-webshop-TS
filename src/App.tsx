import { useState } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Product, products } from "../data";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/Navbar";
import { NewProductForm } from "./components/NewProductForm";
import { Admin } from "./pages/Admin";
import { CartPage } from "./pages/CartPage";
import { FAQ } from "./pages/FAQ";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";

export default function App() {
  const [items, setItems] = useState<Product[]>(products);

  return (
    <>
      <Navbar />
      <main>
        <Container
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "5px",
          }}
          className="mb-4"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin/product?/:productid?/:editItem?" element={<Admin items={items} setItems={setItems}/>} />
            <Route path="/admin/product/new" element={<NewProductForm items={items} setItems={setItems}/>} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/product/:productid" element={<ProductPage />} />
            <Route path="/cart/cartitem" element={<CartPage/>}/>
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

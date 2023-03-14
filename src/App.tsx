import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
// import { AddNewItemBtn } from "./components/AddNewItemBtn";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/Navbar";
import { ProductPage } from "./components/ProductPage";

import { Admin } from "./pages/Admin";
import { FAQ } from "./pages/FAQ";

import { Home } from "./pages/Home";

export default function App() {
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
            <Route path="/admin" element={<Admin />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/products/:productid" element={<ProductPage />} />
            {/* <Route path="/admin/create-new-item" element={<AddNewItemBtn />} /> */}
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

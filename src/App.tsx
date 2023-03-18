import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/Navbar";
import { Admin } from "./pages/Admin";
import { FAQ } from "./pages/FAQ";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";

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
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

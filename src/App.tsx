import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/Navbar";
import { Admin } from "./pages/Admin";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";

export default function App() {
  return (
    <>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Container>
        <Footer />
    </>
  );
}

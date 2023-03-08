import { Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Admin } from './pages/Admin';
import { Contact } from './pages/Contact';
import { Container } from "react-bootstrap";


export default function App() {
  return (
      <>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </>
    );
  }

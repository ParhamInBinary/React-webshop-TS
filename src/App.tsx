import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { EditForm } from "./components/EditForm";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/Navbar";
import { NewProductForm } from "./components/NewProductForm";
import { Admin } from "./pages/Admin";
import { CartPage } from "./pages/Checkout";
import { ConfirmationPage } from "./pages/ConfirmationPage";
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
            <Route path="/admin/product?/:productid?/:editItem?" element={<Admin/>} />
            <Route path="/admin/product/new" element={<NewProductForm />} />
            <Route path="/admin/product/editItem/:productid" element={<EditForm />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/product/:productid" element={<ProductPage />} />
            <Route path="/confirmation" element={<CartPage/>}/>
            <Route path="/confirmationPage" element={<ConfirmationPage />}/>
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

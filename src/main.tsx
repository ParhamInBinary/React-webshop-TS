import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ProductCard } from "./components/ProductCard";
import CartProvider from "./contexts/cartContext";
import { ProductProvider } from "./contexts/ProductContext";
import './index.css';


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
import { createContext, PropsWithChildren, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product, products } from "../../data";

interface ProductContextValue {
    handleDelete: (id: string) => void;
    handleEdit: (id: string) => void;
    handleSave: (editedItem: Product) => void;
    editingItem: Product | null
    setEditingItem: React.Dispatch<React.SetStateAction<Product | null>>
    items: Product[]
    setItems: React.Dispatch<React.SetStateAction<Product[]>>
}

export const ProductContext = createContext({} as ProductContextValue);

export function ProductProvider({ children }: PropsWithChildren) {
  const navigate = useNavigate();

  const [editingItem, setEditingItem] = useState<Product | null>(null);
  const [items, setItems] = useState<Product[]>(products);

  const handleDelete = (id: string) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("products", JSON.stringify(updatedItems));
  };
  
  const handleEdit = (id: string) => {
    const itemToEdit = items.find((item) => item.id === id);
    if (itemToEdit) {
      navigate(`/admin/product/editItem/${itemToEdit.id}`);
      setEditingItem(itemToEdit);
      localStorage.setItem("selectedItem", JSON.stringify(itemToEdit));
    } else {
      setEditingItem(null);
    }
  };

  const handleSave = (editedItem: Product) => {
    const updatedItems = items.map((item) =>
      item.id === editedItem.id ? editedItem : item
    );
    navigate("/admin");
    setItems(updatedItems);
    setEditingItem(null);
    localStorage.setItem("products", JSON.stringify(updatedItems));
  };

  return (
    <ProductContext.Provider
      value={{ editingItem, setEditingItem, handleEdit, handleDelete, handleSave, items, setItems }}
    >
      {children}
    </ProductContext.Provider>
  );
}

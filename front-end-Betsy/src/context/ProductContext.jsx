import React, { createContext, useContext, useState } from "react";
import {
  createProductsRequest,
  deleteProductsRequest,
  getProductsRequest,
  getProductRequest,
  updateProductsRequest,
} from "../services/products";

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useProducts sin Contexto");
  return context;
};

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await getProductsRequest();
    console.log(res.data);
    setProducts(res.data);
  };

  // Resto de las funciones (deleteProduct, createProduct, etc.)

  return (
    <ProductContext.Provider
      value={{
        products,
        getProducts,
        // Resto de las funciones (deleteProduct, createProduct, etc.)
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onEdit, onDelete }) => {
  if (!products || products.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <ul>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ProductList;

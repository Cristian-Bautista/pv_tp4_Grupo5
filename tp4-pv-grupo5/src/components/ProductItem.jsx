import React from 'react';

const ProductItem = ({ product, onEdit, onDelete }) => {
  return (
    <div className="product-item">
      <div className="product-info">
        <h3>{product.descripcion}</h3>
        <p>ID: {product.id}</p>
        <p>Precio unitario: ${product.precioUnitario.toFixed(2)}</p>
        <p>Descuento: {product.descuento}%</p>
        <p>Precio con descuento: ${product.precioConDescuento.toFixed(2)}</p>
        <p>Stock: {product.stock}</p>
      </div>
      <div className="product-actions">
        <button onClick={() => onEdit(product)}>Editar</button>
        <button onClick={() => onDelete(product.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ProductItem;
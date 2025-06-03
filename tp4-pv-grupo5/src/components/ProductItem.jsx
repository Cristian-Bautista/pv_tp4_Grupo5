import React from 'react';
import './ProductItem.css';
  
const ProductItem = ({ product, onEdit, onDelete }) => {
  return (
    <li className='product-item'>
      <strong>{product.descripcion}</strong>(ID:{product.id})<br/>
      Precio: ${product.precioUnitario} - Descuento: {product.descuento}%<br/>
      Precio con descuento: ${product.precioConDescuento}<br/>
      Stock: {product.stock}<br/>
      <button onClick={()=>onEdit(product)}>Editar</button>
      <button onClick={()=>onDelete(product.id)}>Eliminar</button>
    </li>
  );
};

export default ProductItem;
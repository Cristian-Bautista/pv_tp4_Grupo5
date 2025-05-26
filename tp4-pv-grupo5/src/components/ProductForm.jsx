import React, { useState, useEffect } from 'react';

const ProductForm = ({onSubmit, editingProduct})=>{
    const [product,setProduct] = useState({
        id:'',
        descripcion:'',
        precioUnitario: 0,
        descuento: 0,
        stock: 0,
    });

    useEffect(() => {
        if(editingProduct){
            setProduct(editingProduct);
        }
    },[editingProduct]);
    
    useEffect(() => {
        const precio = parseFloat(product.precioUnitario);
        const descuento = parseFloat(product.descuento);
        const precioConDescuento = precio - (precio * descuento/100);
        setProduct(prev =>({...prev,precioConDescuento: Number(precioConDescuento.toFixed(2))}));
    },[product.precioUnitario, product.descuento]);
    
    const handleChange = (e) => {
        const {name,value}=e.target;
        setProduct(prev => ({...prev,[name]:value}));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!product.id || !product.descripcion) return;
        onSubmit({...product,precioUnitario: +product.precioUnitario,descuento:+product.descuento,stock:+product.stock});
        setProduct({id: '',descripcion:'',precioUnitario:0,descuento:0,stock:0});
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>{editingProduct ? 'Editar Producto' : 'Agregar Producto'}</h2>
            <input name="id" value={product.id} onChange={handleChange} placeholder="ID" disabled={!!editingProduct}/>
            <input name="descripcion" value={product.descripcion} onChange={handleChange} placeholder="Descripcion"/>
            <input name="precioUnitario" value={product.precioUnitario} onChange={handleChange} placeholder="Precio Unitario"/>
            <input name="descuento" type="number" value={product.descuento} onChange={handleChange} placeholder="Descuento"/>
            <input name="stock" type="number" value={product.stock} onChange={handleChange} placeholder="Stock"/>
            <button type="submit">{editingProduct ? 'Actualizar' : 'Agregar'}</button>
        </form>
    );
};
export default ProductForm;
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import './App.css'
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';

const App = ()=>{
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(()=>{
    console.log(`Producto Actualizados ${products}`);
  },[products]);

  const addProduct=useCallback((product) =>{
    setProducts(prev => [...prev, product]);
  },[]);

  const lastAddProduct=useRef(addProduct);
  useEffect(() => {
    console.log(lastAddProduct.current === addProduct);
  },[addProduct]);

  const updateProduct = useCallback((updateProduct) => {
    setProducts(prev =>
      prev.map(p =>(p.id === updateProduct.id ? updateProduct : p))
    );
  },[]);

  const deleteProduct = useCallback((id)=>{
    setProducts(prev => prev.filter(p=> p.id !== id));
  },[]);

  const handleAddOrUpdate = useCallback((product) => {
    const exists = products.find(p => p.id === product.id)
    if(exists){
      updateProduct(product)
    }else{
      addProduct(product)
    }
    setEditingProduct(null);
  },[products, addProduct, updateProduct]);

  const handleEdit = useCallback((product)=>{
    setEditingProduct(product);
  },[]);

  const filteredProducts = useMemo(()=>{
    return products.filter(p =>
      p.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.includes(searchTerm)
    );
  },[products, searchTerm]);

  return (
    <div>
      <h1>Gestion del Producto</h1>
      <ProductForm onSubmit={handleAddOrUpdate} editingProduct={editingProduct}/>
      <SearchBar value={searchTerm} onChange={setSearchTerm}/>
      <ProductList products={filteredProducts} onDelete={deleteProduct} onEdit={handleEdit} />
    </div>
  );
};

export default App

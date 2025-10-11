import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

const mockProducts = [
  { id: 1, name: 'Kurti 1', price: 499, stock: 100 },
  { id: 2, name: 'Kurti 2', price: 599, stock: 80 },
  { id: 3, name: 'Kurti 3', price: 699, stock: 120 },
  { id: 4, name: 'Kurti 4', price: 799, stock: 50 },
];

const ProductManagement: React.FC = () => {
  const [products, setProducts] = useState(mockProducts);

  const [editingProduct, setEditingProduct] = useState<typeof mockProducts[0] | null>(null);

  const addProduct = (product: Omit<typeof mockProducts[0], 'id'>) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const updateProduct = (updatedProduct: typeof mockProducts[0]) => {
    setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
    setEditingProduct(null);
  };

  return (
    <div className="mt-8 text-center">
      <h2 className="text-3xl font-semibold font-playfair text-secondary">Product Management</h2>
      <p className="text-md text-foreground mt-2 mb-4">Here you can manage your products.</p>
      <ProductForm addProduct={addProduct} editingProduct={editingProduct} updateProduct={updateProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} setEditingProduct={setEditingProduct} />
    </div>
  );
};

export default ProductManagement;

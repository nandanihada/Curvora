import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface ProductListProps {
  products: Product[];
  deleteProduct: (id: number) => void;
  setEditingProduct: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, deleteProduct, setEditingProduct }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium">Product List</h3>
      <table className="min-w-full mt-2 bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">₹{product.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.stock}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={() => setEditingProduct(product)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                <button onClick={() => deleteProduct(product.id)} className="ml-4 text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;

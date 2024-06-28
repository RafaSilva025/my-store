// components/ProductList.tsx
import React from 'react';
import { useProducts } from '../hooks/useProducts';

type Product = {
  id: number;
  name: string;
  price: number;
};

const ProductList: React.FC = () => {
  const { data, error, isLoading } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {data?.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

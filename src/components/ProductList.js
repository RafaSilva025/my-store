import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useProducts } from '../hooks/useProducts';

const ProductList = () => {
  const { data, error, isLoading } = useProducts(1, 10, 'nome', 'ASC');

  if (isLoading) {
    return (
      <div>
        <Skeleton height={30} count={5} />
      </div>
    );
  }

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.products.map(product => (
        <div key={product.id}>
          <h2>{product.nome}</h2>
          <p>Preço: {product.preco}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

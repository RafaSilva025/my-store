import React from 'react';
import { useProducts } from '../hooks/useProducts'; // Ajuste o caminho conforme necessário

const ProductList = () => {
  const { data, error, isLoading } = useProducts(1, 10, 'nome', 'ASC');

  if (isLoading) return <div>Loading...</div>;
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

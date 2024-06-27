import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useProducts } from '../hooks/useProducts'; 
import useCart from '../hooks/useCart'; 
import { motion } from 'framer-motion';

const ProductList = () => {
  const { data, error, isLoading } = useProducts(1, 10, 'nome', 'ASC');
  const { addToCart } = useCart();

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
        <motion.div key={product.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>{product.nome}</h2>
          <p>Preço: {product.preco}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductList;

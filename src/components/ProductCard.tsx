// src/components/ProductCard.tsx
"use client";

import React from 'react';
import { Product } from '../types/Product';
import styles from '../styles/Home.module.scss';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className={styles['product-card']}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={() => onAddToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductCard;

// components/ProductCard.tsx
import React from 'react';
import styled from 'styled-components';
import { Product } from '../types/Product';
import '../styles/ProductCard.module.scss'; // Importando os estilos SCSS

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { id, name, price } = product;

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-card">
      <h3 className="product-name">{name}</h3>
      <p className="product-price">R$ {price.toFixed(2)}</p>
      <button className="add-to-cart" onClick={handleAddToCart}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductCard;

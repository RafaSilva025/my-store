// components/Cart.tsx
import React from 'react';
import { Product } from '../types/Product';
import '../styles/Cart.module.scss'; // Importando os estilos SCSS

interface CartProps {
  cart: Product[];
}

const Cart: React.FC<CartProps> = ({ cart }) => {
  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrinho de Compras</h2>
      <div className="cart-items">
        {cart.map((product) => (
          <div key={product.id} className="cart-item">
            <span className="product-name">{product.name}</span>
            <span className="product-price">R$ {product.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

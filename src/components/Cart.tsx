// src/components/Cart.tsx
"use client";

import React from 'react';
import { Product } from '../types/Product';

interface CartProps {
  cart: Product[];
}

const Cart: React.FC<CartProps> = ({ cart }) => {
  return (
    <div>
      <h2>Carrinho</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

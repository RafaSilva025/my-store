// components/Cart.tsx
import React from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartProps = {
  products: Product[];
  onIncreaseQuantity: (id: number) => void;
  onDecreaseQuantity: (id: number) => void;
};

const Cart: React.FC<CartProps> = ({ products, onIncreaseQuantity, onDecreaseQuantity }) => {
  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price} - Quantidade: {product.quantity}
            <button onClick={() => onIncreaseQuantity(product.id)}>+</button>
            <button onClick={() => onDecreaseQuantity(product.id)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

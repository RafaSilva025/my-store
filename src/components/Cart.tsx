import React from 'react';
import { useCartStore } from '../store/cartStore';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useCartStore();

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;

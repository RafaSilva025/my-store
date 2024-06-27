import React from 'react';
import useCart from '../hooks/useCart'; 

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.nome}</h3>
          <p>Preço: {item.preco}</p>
          <p>Quantidade: {item.quantity}</p>
          <button onClick={() => increaseQuantity(item.id)}>Increase</button>
          <button onClick={() => decreaseQuantity(item.id)}>Decrease</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;

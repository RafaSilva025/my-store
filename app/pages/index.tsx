// pages/index.tsx
import React from 'react';
import ProductList from '../../src/components/ProductList';
import Cart from '../../src/components/Cart';
import useCart from '../../src/hooks/useCart';

const Home: React.FC = () => {
  const { cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ProductList addToCart={addToCart} />
      <Cart
        products={cart}
        onIncreaseQuantity={increaseQuantity}
        onDecreaseQuantity={decreaseQuantity}
      />
    </div>
  );
};

export default Home;

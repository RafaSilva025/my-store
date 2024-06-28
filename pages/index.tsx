// pages/index.tsx
import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart'; 

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const Home: React.FC = () => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const handleIncreaseQuantity = (id: number) => {
    setCartProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const handleDecreaseQuantity = (id: number) => {
    setCartProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, quantity: product.quantity - 1 } : product
      )
    );
  };

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ProductList />
      <Cart
        products={cartProducts}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
      />
    </div>
  );
};

export default Home;

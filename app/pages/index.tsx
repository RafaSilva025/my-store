// pages/index.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import ProductCard from '../../src/components/ProductCard';
import Cart from '../../src/components/Cart';
import { Product } from '../../src/types/Product';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const productsData: Product[] = [
  { id: 1, name: 'Smartphone', price: 1200 },
  { id: 2, name: 'Notebook', price: 2500 },
  { id: 3, name: 'Smart TV', price: 3000 },
  { id: 4, name: 'Console de Jogos', price: 1500 },
];

const Home: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  
  return (
    <Container>
      <ProductContainer>
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </ProductContainer>
      <Cart cart={cart} />
    </Container>
  );
};

export default Home;

// app/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../src/components/ProductCard';
import Cart from '../src/components/Cart';
import { Product } from '../src/types/Product';
import styles from '../src/styles/Home.module.scss';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/produtos', {
          params: {
            pagina: 1,
            linhas: 8,  // Limitando para 8 produtos
            ordenarPor: 'nome',
            ordem: 'DESC',
          },
        });
        setProducts(response.data); // Ajuste conforme a estrutura da resposta da API
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div className={styles['home-container']}>
      <div className={styles['product-container']}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} />
      <Cart cart={cart} />
      <Cart cart={cart} />
    </div>
  );
};

export default Home;

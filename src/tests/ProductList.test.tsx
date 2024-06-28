import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from '../components/ProductList';
import { Product } from '../types/Product';

const mockProducts: Product[] = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
];

const mockAddToCart = jest.fn();

jest.mock('../hooks/useProducts', () => ({
  useProducts: () => ({
    data: mockProducts,
    error: null,
    isLoading: false,
  }),
}));

jest.mock('../store/cartStore', () => ({
  useCartStore: () => ({
    addToCart: mockAddToCart,
  }),
}));

test('renders product list and handles add to cart', () => {
  render(<ProductList />);

  expect(screen.getByText('Product List')).toBeInTheDocument();

  const addToCartButtons = screen.getAllByText('Add to Cart');
  expect(addToCartButtons).toHaveLength(mockProducts.length);

  fireEvent.click(addToCartButtons[0]);
  expect(mockAddToCart).toHaveBeenCalledWith(mockProducts[0]);
});

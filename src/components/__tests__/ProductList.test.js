import { render, screen } from '@testing-library/react';
import ProductList from '../ProductList';
import { useProducts } from '../../hooks/useProducts';

jest.mock('../../hooks/useProducts');

test('renders loading state', () => {
  useProducts.mockReturnValue({ isLoading: true });

  render(<ProductList />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test('renders error state', () => {
  useProducts.mockReturnValue({ error: { message: 'Failed to fetch' } });

  render(<ProductList />);

  expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
});

test('renders product list', () => {
  useProducts.mockReturnValue({
    data: {
      products: [{ id: 1, nome: 'Product 1', preco: 10 }]
    },
    isLoading: false,
    error: null
  });

  render(<ProductList />);

  expect(screen.getByText(/product 1/i)).toBeInTheDocument();
  expect(screen.getByText(/preço: 10/i)).toBeInTheDocument();
});

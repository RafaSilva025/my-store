import { renderHook, act } from '@testing-library/react-hooks';
import useCart from '../hooks/useCart';

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

test('should add item to cart', () => {
  const { result } = renderHook(() => useCart());

  const product: Product = { id: 1, name: 'Product 1', price: 100, quantity: 1 };

  act(() => {
    result.current.addToCart(product);
  });

  expect(result.current.cart).toHaveLength(1);
  expect(result.current.cart[0].name).toBe('Product 1');
});

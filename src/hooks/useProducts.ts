
import { useQuery } from 'react-query';

type Product = {
  id: number;
  name: string;
  price: number;

};

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://mks-frontend-challenge-api.herokuapp.com/api/produtos?page=1&rows=10&sortBy=id&orderBy=DESC');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export const useProducts = () => {
  return useQuery<Product[], Error>('products', fetchProducts);
};

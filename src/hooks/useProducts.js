import { useQuery } from 'react-query';

const fetchProducts = async ({ queryKey }) => {
  const [_key, { pagina, linhas, ordenarPor, ordenar }] = queryKey;

  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/produtos`);
  url.searchParams.append('pagina', pagina);
  url.searchParams.append('linhas', linhas);
  url.searchParams.append('ordenar_por', ordenarPor);
  url.searchParams.append('ordenar', ordenar);

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
};

export const useProducts = (pagina = 1, linhas = 10, ordenarPor = 'id', ordenar = 'ASC') => {
  return useQuery(['products', { pagina, linhas, ordenarPor, ordenar }], fetchProducts);
};

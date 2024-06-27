import { useQuery } from 'react-query';

export const useProducts = (pagina = 1, linhas = 10, ordenarPor = 'id', ordenar = 'ASC') => {
  return useQuery(['products', { pagina, linhas, ordenarPor, ordenar }], fetchProducts);
};

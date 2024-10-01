import { useInfiniteQuery } from '@tanstack/react-query';

import { fetchProducts } from '../api/productApi';

export function useProducts() {
	return useInfiniteQuery({
		queryKey: ['products'],
		queryFn: fetchProducts,
		initialPageParam: 1,
		getNextPageParam: (lastPage, _pages) => {
			return lastPage.nextPage <= lastPage.totalPages ? lastPage.nextPage : undefined;
		},
		staleTime: 1000 * 60 * 5, // 5 minutos de validade dos dados
	});
}

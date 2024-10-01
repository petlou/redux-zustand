import { describe, it, expect, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';

import { useProducts } from '../hooks/useProduct';
import { fetchProducts } from '../api/productApi';
import { TestQueryClientProvider } from '../utils/wrapper';

vi.mock('../api/productApi');

describe('useProducts', () => {
	it('should search for products successfully', async () => {
		const mockProducts = {
			products: [{ id: 1, title: 'Produto 1' }],
			nextPage: 2,
			totalPages: 2,
		};

		(fetchProducts as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce(mockProducts);

		const { result } = renderHook(() => useProducts(), { wrapper: TestQueryClientProvider });

		await waitFor(() => expect(result.current.isSuccess).toBe(true));

		expect(result?.current?.data?.pages[0].products).toEqual(mockProducts.products);
		expect(result.current.hasNextPage).toBe(true);
	});

	it('should return the correct state while loading', async () => {
		(fetchProducts as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
			products: [],
			nextPage: 2,
			totalPages: 2,
		});

		const { result } = renderHook(() => useProducts(), { wrapper: TestQueryClientProvider });

		expect(result.current.isLoading).toBe(true);

		await waitFor(() => expect(result.current.isSuccess).toBe(true));
	});
});

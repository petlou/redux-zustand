import { describe, it, expect, vi } from 'vitest';

import { fetchProducts } from '../api/productApi';
import { api } from '../lib/axios';

vi.mock('../lib/axios');

describe('fetchProducts', () => {
	it('should search for products correctly', async () => {
		const mockResponse = {
			data: {
				products: [{ id: 1, title: 'Produto 1' }],
				total: 15,
			},
		};

		(api.get as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce(mockResponse);

		const result = await fetchProducts({ pageParam: 1 });

		expect(result).toEqual({
			products: [{ id: 1, title: 'Produto 1' }],
			nextPage: 2,
			totalPages: 2,
		});

		expect(api.get).toHaveBeenCalledWith('/products', {
			params: { limit: 9, skip: 0 },
		});
	});

	it('should correctly calculate the total number of pages', async () => {
		const mockResponse = {
			data: {
				products: [],
				total: 100,
			},
		};

		(api.get as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce(mockResponse);

		const result = await fetchProducts({ pageParam: 10 });

		expect(result.totalPages).toBe(10);
	});
});

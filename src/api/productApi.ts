import { api } from '../lib/axios'

export const fetchProducts = async ({ pageParam = 1 }) => {
	const { data } = await api.get(`/products`, {
		params: { limit: 9, skip: (pageParam - 1) * 10 },
	})

	return {
		products: data.products,
		nextPage: pageParam + 1,
		totalPages: Math.ceil(data.total / 10),
	}
}

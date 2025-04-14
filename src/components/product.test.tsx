import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient } from '@tanstack/react-query';
import ProductsList from './product';
import { TestQueryClientProvider } from '../utils/wrapper';
import { fetchProducts } from '../api/productApi';

vi.mock('../api/productApi');

describe('ProductsList', () => {
	const queryClient = new QueryClient();

	afterEach(() => {
		queryClient.clear();
		vi.clearAllMocks();
	});

	describe('ProductsList - Renderização', () => {
		it('deve exibir a mensagem de carregamento quando isLoading for true', async () => {
			// Mock da função fetchProducts para simular o estado de carregamento
			(fetchProducts as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
				products: [],
				nextPage: 2,
				totalPages: 2,
			});

			render(<ProductsList />, { wrapper: TestQueryClientProvider });

			// Verifica se a mensagem de carregamento está sendo exibida
			expect(screen.getByText(/Carregando produtos.../i)).toBeInTheDocument();

			// Aguarda a conclusão da requisição
			await waitFor(() =>
				expect(screen.queryByText(/Carregando produtos.../i)).not.toBeInTheDocument()
			);
		});

		it('deve exibir a mensagem de erro quando isError for true', async () => {
			// Mock da função fetchProducts para simular um erro
			(fetchProducts as unknown as ReturnType<typeof vi.fn>).mockRejectedValueOnce(
				new Error('Erro ao carregar produtos')
			);

			render(<ProductsList />, { wrapper: TestQueryClientProvider });

			// Aguarda a exibição da mensagem de erro
			await waitFor(() =>
				expect(screen.getByText(/Erro: Erro ao carregar produtos/i)).toBeInTheDocument()
			);
		});
	});
});

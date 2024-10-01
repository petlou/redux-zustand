import { useProducts } from '../hooks/useProduct'
import { useState } from 'react'

// modelo para testes

const ProductsList = () => {
	const { data, isLoading, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useProducts()

	const [currentPage, setCurrentPage] = useState(0)

	if (isLoading) return <div>Carregando produtos...</div>

	if (isError) return <div>Erro: {error.message}</div>

	const handleNextPage = () => {
		if (hasNextPage) {
			fetchNextPage()
		}
		setCurrentPage(prev => prev + 1)
	}

	const handlePreviousPage = () => {
		setCurrentPage(prev => (prev > 0 ? prev - 1 : prev))
	}

	return (
		<div>
			<h1>Lista de Produtos</h1>
			{data.pages[currentPage] && (
				<ul>
					{data.pages[currentPage].products.map(product => (
						<li key={product.id}>
							{product.title} - ${product.price}
						</li>
					))}
				</ul>
			)}

			<div>
				<button onClick={handlePreviousPage} disabled={currentPage === 0}>
					Página Anterior
				</button>

				<button
					onClick={handleNextPage}
					disabled={!hasNextPage && currentPage === data.pages.length - 1}
				>
					{isFetchingNextPage ? 'Carregando mais...' : 'Próxima Página'}
				</button>

				{!hasNextPage && currentPage === data.pages.length - 1 && (
					<p>Todos os produtos foram carregados</p>
				)}
			</div>
		</div>
	)
}

export default ProductsList

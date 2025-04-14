import { useProducts } from '../hooks/useProduct';
import { useState } from 'react';

export const ProductsList = () => {
	const { data, isLoading, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useProducts();

	const [currentPage, setCurrentPage] = useState(0);

	if (isLoading) return <div>Carregando produtos...</div>;

	if (isError) return <div>Erro: {error.message}</div>;

	const handleNextPage = () => {
		if (hasNextPage) {
			fetchNextPage();
		}
		setCurrentPage(prev => prev + 1);
	};

	const handlePreviousPage = () => {
		setCurrentPage(prev => (prev > 0 ? prev - 1 : prev));
	};

	return (
		<>
			{data && (
				<>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 w-full max-w-5xl">
						{data.pages[currentPage] &&
							data.pages[currentPage].products.map(product => (
								<div
									key={product.id}
									className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all md flex flex-col h-full"
								>
									<img
										src={product.thumbnail}
										alt={product.title}
										className="w-full h-40 object-cover rounded-md"
									/>
									<h2 className="text-lg font-bold mt-2">{product.title}</h2>
									<div className="flex-grow"></div>
									<p className="text-gray-600 text-sm">{product.description.substring(0, 40)}...</p>
									<p className="text-green-700 font-bold mt-1">${product.price}</p>
									<button className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg">
										Adicionar ao Carrinho
									</button>
								</div>
							))}
					</div>
					<div className="flex gap-4 mt-6">
						<button
							disabled={currentPage === 0}
							onClick={handlePreviousPage}
							className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
						>
							Página Anterior
						</button>
						<span className="text-green-900 font-bold">
							Página {currentPage + 1} de {data.pages.length}
						</span>
						<button
							onClick={handleNextPage}
							disabled={!hasNextPage && currentPage === data.pages.length - 1}
							className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
						>
							{isFetchingNextPage ? 'Carregando mais...' : 'Próxima Página'}
						</button>
						{!hasNextPage && currentPage === data.pages.length - 1 && (
							<p className="text-green-900 font-bold">Todos os produtos foram carregados</p>
						)}
					</div>
				</>
			)}
		</>
	);
};

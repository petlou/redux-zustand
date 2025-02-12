import { FaShoppingCart } from 'react-icons/fa';

export const Header = () => {
	return (
		<header className="w-full max-w-5xl flex justify-between items-center bg-green-200 p-4 rounded-lg shadow-md">
			<h1 className="text-2xl font-bold text-green-900">Product List</h1>
			<button className="text-green-900 text-2xl hover:text-green-700">
				<FaShoppingCart />
			</button>
		</header>
	);
};

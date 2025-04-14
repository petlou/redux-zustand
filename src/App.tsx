import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ProductsList } from './components/product';
import { Header } from './components/ui/header';

const queryClient = new QueryClient();

const isDevelopment = import.meta.env.VITE_APP_ENV;

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="flex flex-col items-center bg-green-50 min-h-screen p-4">
				<Header />
				<ProductsList />
			</div>
			{isDevelopment && <ReactQueryDevtools initialIsOpen={false} />}
		</QueryClientProvider>
	);
}

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ProductsList from './components/product';

const queryClient = new QueryClient();

const isDevelopment = import.meta.env.VITE_APP_ENV;

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ProductsList />
			{isDevelopment && <ReactQueryDevtools initialIsOpen={false} />}
		</QueryClientProvider>
	);
}

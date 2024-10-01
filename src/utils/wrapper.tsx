import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const createTestQueryClient = () => {
	return new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
				refetchOnWindowFocus: false,
			},
		},
	});
};

export const TestQueryClientProvider = ({ children }: { children: React.ReactNode }) => {
	const queryClient = createTestQueryClient();
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

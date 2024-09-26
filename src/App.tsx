import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<h1>Hello Peter!</h1>
		</QueryClientProvider>
	)
}

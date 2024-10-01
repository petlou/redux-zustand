import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { configDefaults } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/vitest-setup.ts',
		exclude: [...configDefaults.exclude, 'e2e/**'],
		coverage: {
			enabled: true,
			provider: 'v8',
			reporter: ['html'],
			all: true,
			include: ['src/**/*.{ts,tsx,js,jsx}'],
			reportsDirectory: './__test__/coverage',
		},
	},
})

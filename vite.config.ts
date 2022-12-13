import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.sсss'],
		alias: {
			src: '/src',
		},
	},
	plugins: [react()],
	// build: {
	// 	sourcemap: false,
	// 	emptyOutDir: true,
	// 	outDir: 'dist',
	// },
});

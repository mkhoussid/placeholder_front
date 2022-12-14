import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.sсss'],
		alias: {
			src: '/src',
		},
	},
	envPrefix: 'VITE',
	server: {
		port: 3030,
	},
	plugins: [
		react({
			babel: {
				presets: [],
				plugins: [
					// [
					// 	'effector-logger/babel-plugin',
					// 	{
					// 		inspector: true,
					// 		effector: {
					// 			reactSsr: false,
					// 			factories: [
					// 				// 'shared/lib/effector-timer',
					// 				// 'effector-forms',
					// 			],
					// 		},
					// 	},
					// ],
				],
				babelrc: true,
				configFile: false,
			},
		}),
	],

	// "plugins": ["effector-logger/babel-plugin"]
	// build: {
	// 	sourcemap: false,
	// 	emptyOutDir: true,
	// 	outDir: 'dist',
	// },
});

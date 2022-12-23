import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dns from 'dns';

dns.setDefaultResultOrder('verbatim');

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
		open: true,
	},
	plugins: [
		react({
			babel: {
				presets: [],
				plugins: [
					// [
					// 	'effector-logger/babel-plugin',
					// 	{
					// 		inspector: true,pm
					// 		effector: {
					// 			reactSsr: false,
					// 			factories: [
					// 				// 'shared/lib/effector-timer',
					// 				// 'effector-forms',
					// 			],
					// 		},
					// 	},
					// ],
					[
						'@emotion',
						{
							// sourceMap is on by default but source maps are dead code eliminated in production
							sourceMap: true,
							autoLabel: 'dev-only',
							labelFormat: '[local]',
							cssPropOptimization: true,
						},
					],
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

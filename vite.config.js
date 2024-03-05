import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const getAliasUrl = path => {
	return new URL(`./src/@${path}`, import.meta.url).pathname;
};
// https://vitejs.dev/config/

export default defineConfig({
	plugins: [react() ],
	resolve: {
		alias: {
			'@': new URL('./src/', import.meta.url).pathname,
			'@components': getAliasUrl('components'),
			'@common': getAliasUrl('common'),
			'@defaults': getAliasUrl('defaults'),
			'@helpers': getAliasUrl('helpers'),
			'@hooks': getAliasUrl('hooks'),
			'@hoks': getAliasUrl('hoks'),
			'@middlewares': getAliasUrl('middlewares'),
			'@providers': getAliasUrl('providers'),
			'@routes': getAliasUrl('routes'),
			'@utils': getAliasUrl('utils'),
			'@theme': getAliasUrl('theme'),
			'@assets': getAliasUrl('assets'),
			'@pages': getAliasUrl('pages'),
			'@store': getAliasUrl('store'),
			'@containers': getAliasUrl('containers'),
			'@services': getAliasUrl('services'),
		},
		extensions: ['.js', '.jsx', '.json'],
	},
	build: {
		outDir: '../app/client',
	},
});

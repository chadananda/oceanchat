import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Use the adapter-static for GitHub Pages hosting
		adapter: adapter({
			 pages: 'build',
			 assets: 'build',
			 fallback: 'index.html' // Add this line
		}),
	}
};

export default config;

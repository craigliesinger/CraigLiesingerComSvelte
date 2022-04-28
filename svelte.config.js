import preprocess from 'svelte-preprocess';
// import firebase from "svelte-adapter-firebase";
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		  }),
	  
		//   prerender: {
		// 	// This can be false if you're using a fallback (i.e. SPA mode)
		// 	default: true
		//   },
		  trailingSlash: 'always',
//    adapter: adapter(),
   prerender: {
	entries: ['*']
}
	}
};

export default config;

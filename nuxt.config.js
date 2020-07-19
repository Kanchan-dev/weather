
export default {
	/*
	** Nuxt rendering mode
	** See https://nuxtjs.org/api/configuration-mode
	*/
	mode: 'universal',
	/*
	** Nuxt target
	** See https://nuxtjs.org/api/configuration-target
	*/
	target: 'static',
	/*
	** Headers of the page
	** See https://nuxtjs.org/api/configuration-head
	*/
	head: {
		// title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		],
		script: [
			{ src: 'https://platform.twitter.com/widgets.js', async: true }
		],
		htmlAttrs: {
			prefix: 'og: http://ogp.me/ns#'
		},
		titleTemplate: '%s - サイト名',
		meta: [
			{ hid: 'description', name: 'description', content: '共通ディスクリプション' },
			{ hid: 'og:site_name', property: 'og:site_name', content: 'サイト名' },
			{ hid: 'og:type', property: 'og:type', content: 'website' },
			{ hid: 'og:url', property: 'og:url', content: 'https://example.com' },
			{ hid: 'og:title', property: 'og:title', content: 'サイト名' },
			{ hid: 'og:description', property: 'og:description', content: '共通ディスクリプション' },
			{ hid: 'og:image', property: 'og:image', content: 'https://example.com/img/ogp/common.jpg' },
			// { property: 'article:publisher', content: 'FacebookURL' },
			// { property: 'fb:app_id', content: 'FacebookAppID' },
			// { name: 'twitter:card', content: 'summary' },
			// { name: 'twitter:site', content: '@Twitter' },
		],
	},
	/*
	** Global CSS
	*/
	css: [
	],
	/*
	** Plugins to load before mounting the App
	** https://nuxtjs.org/guide/plugins
	*/
	plugins: [
	],
	/*
	** Auto import components
	** See https://nuxtjs.org/api/configuration-components
	*/
	components: true,
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
	],
	/*
	** Axios module configuration
	** See https://axios.nuxtjs.org/options
	*/
	axios: {},
	/*
	** Build configuration
	** See https://nuxtjs.org/api/configuration-build/
	*/
	build: {
		filenames: {
			app: () => '[name].js',
			chunk: () => '[name].js',
			css: () => '[name].js',
			img: () => '[path][name].[ext]',
			font: () => '[path][name].[ext]',
			video: () => '[path][name].[ext]'
		},
	}
}

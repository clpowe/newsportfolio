// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/devtools',
		'@nuxtjs/tailwindcss',
		'nuxt-icon',
		'@vueuse/nuxt',
		'@nuxtjs/google-fonts'
	],
	googleFonts: {
		families: {
			Oswald: [400, 700],
			Inter: [400, 700]
		}
	}
})

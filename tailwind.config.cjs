/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			padding: '3rem',
		},
		extend: {
			fontFamily: {
				sans: ['Noto Sans', 'sans-serif']
			},
			colors: {
				'anatoli-yellow': '#FBC540',
			},
		},
	},
	plugins: [],
}

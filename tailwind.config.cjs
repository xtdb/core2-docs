/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	theme: {
		fontFamily: {
			sans: ['Atkinson Hyperlegible', ...defaultTheme.fontFamily.mono],
            mono: ['PT Mono', ...defaultTheme.fontFamily.mono]
		},
	},
	plugins: [],
}

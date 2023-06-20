/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'Helvetica', 'Ubuntu', 'system-ui', 'sans-serif'],
			},
			colors: {
				primary: {
					100: '#fffeff',
					200: '#90d1da',
					400: '#6ccbd7',
					500: '#2b9faf',
					600: '#7a7c7a',
					700: '#3e3e3e',
					800: '#262626',
					900: '#010101',
				},
			},
		},
	},
	plugins: [],
};

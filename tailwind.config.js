/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
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
					600: '#09899a',
					700: '#0d7886',
					800: '#005f6b',
					900: '#00424b',
				},
			},
		},
	},
	plugins: [],
};

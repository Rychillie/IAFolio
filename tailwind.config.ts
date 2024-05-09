import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-geist-sans)'],
				mono: ['var(--font-geist-mono)'],
			},
			colors: {
				primary: '#161616',
				secondary: '#6F6F6F',
				'primary-dark': '#EDEDED',
				'secondary-dark': '#A0A0A0',
			},
		},
	},
	darkMode: 'class',
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [],
} satisfies Config

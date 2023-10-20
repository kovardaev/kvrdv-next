import type { Config } from 'tailwindcss';

const white = '#DCDCDC';
const black = '#141218';
const accent = '#F8DC4C';
const dark = '#1D1B20';
const gray = '#49454F';

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			white,
			black,
			accent,
			dark,
			gray,
		},
		extend: {
			// fontFamily: {
			// 	sens: ['var(--font-inter)'],
			// },
		},
	},
	plugins: [],
};

export default config;

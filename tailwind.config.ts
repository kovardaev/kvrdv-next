import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			white: '#DCDCDC',
			black: '#141218',
			accent: '#F8DC4C',
			dark: '#1D1B20',
			gray: '#49454F',
		},
		extend: {
			minWidth: {
				'265px': '265px',
			},
			maxWidth: {
				'600px': '600px',
			},
			height: {
				'max-content': 'max-content',
			},
			width: {
				'max-content': 'max-content',
			},
			gridTemplateColumns: {
				'max-content-auto': 'max-content auto',
			},
			keyframes: {
				fadeIn: {
					'0%': {
						opacity: '0',
						transform: 'translate3d(0, 20px, 0)',
					},
					'100%': { opacity: '1', transform: 'none' },
				},
				slide: {
					'0%': {
						transform: 'translateX(-500%)',
					},
					'100%': {
						transform: 'translateX(0)',
					},
				},
			},
			animation: {
				fadeIn: 'fadeIn 1s',
				slide: 'slide 1s',
				bounce: 'bounce 1s',
			},
		},
	},
	plugins: [],
};

export default config;

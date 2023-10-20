const unshuffledData = [
	'TypeScript',
	'React',
	'HTML',
	'CSS',
	'SCSS',
	'JavaScript',
	'NPM',
	'Yarn',
	'Bootstrap',
	'Tailwind',
	'Material',
	'Figma',
	'Redux',
	'Axios',
	'React Query',
	'Insomnia',
	'Postman',
	'GitHub',
	'Git',
	'Webpack',
	'Vite',
	'Jest',
	'GraphQL',
	'Node.js',
	'Next.js',
	'Nest.js',
	'Express.js',
	'MongoDB',
	'MySQL',
	'PostgreSQL',
];

const shuffledData = unshuffledData
	.map((value) => ({ value, sort: Math.random() }))
	.sort((a, b) => a.sort - b.sort)
	.map(({ value }) => value);

export default shuffledData;

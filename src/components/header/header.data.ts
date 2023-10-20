import image1 from '../../assets/images/header/header-1.png';
import image2 from '../../assets/images/header/header-2.png';
import image3 from '../../assets/images/header/header-3.png';

const headerData = {
	en: {
		home: {
			header: 'Semyon Kovardaev',
			subHeader: 'Frontend Development',
			image: image2,
		},
		projects: {
			header: 'Project Gallery',
			subHeader: 'Adaptive & Сross-browser',
			image: image1,
		},
		techStack: {
			header: 'Technology Stack',
			subHeader: 'TypeScript, Next and more',
			image: image3,
		},
	},
	ru: {
		home: {
			header: 'Семён Ковардаев',
			subHeader: 'Frontend разработка',
			image: image2,
		},
		projects: {
			header: 'Портфолио проектов',
			subHeader: 'Адаптивно и кроссбраузерно',
			image: image1,
		},
		techStack: {
			header: 'Стек технологий',
			subHeader: 'TypeScript, Next и не только',
			image: image3,
		},
	},
};

export default headerData;

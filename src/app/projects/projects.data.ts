import project1 from '../../assets/images/projects/project-1.png';
import project2 from '../../assets/images/projects/project-2.png';
import project3 from '../../assets/images/projects/project-3.png';
import project4 from '../../assets/images/projects/project-4.png';
import project5 from '../../assets/images/projects/project-5.png';
import project6 from '../../assets/images/projects/project-6.png';
import project7 from '../../assets/images/projects/project-7.png';
import project8 from '../../assets/images/projects/project-8.png';
import project9 from '../../assets/images/projects/project-9.png';
import project10 from '../../assets/images/projects/project-10.png';
import project11 from '../../assets/images/projects/project-11.png';
import project12 from '../../assets/images/projects/project-12.png';
import project13 from '../../assets/images/projects/project-13.png';
import project14 from '../../assets/images/projects/project-14.png';
import project15 from '../../assets/images/projects/project-15.png';
import project16 from '../../assets/images/projects/project-16.png';

const projectsData = [
	{
		name: 'Weekclick',
		infoEn: `The app allows users to organize their tasks by grouping them by day of the week. Convenient 
			and intuitive solution for efficient planning and execution of tasks during the week`,
		infoRu: `Приложение позволяет пользователям организовать свои задачи, группируя их по дням недели. 
			Удобное и интуитивно понятное решение для эффективного планирования и выполнения заданий 
			в течение недели`,
		techStack: [
			'TypeScript',
			'React',
			'Webpack',
			'Yarn',
			'styled-components',
			'MUI',
			'Redux',
			'RTK',
		],
		image: project1,
		linkGit: 'https://github.com/kvrdv/weekclick',
		linkDeploy: 'https://kvrdv.github.io/weekclick/',
	},
	{
		name: 'Avifly',
		infoEn: `The airfare filtering app helps users quickly find and select the most suitable flights using 
			various criteria such as price, departure time, airline and route. An effective tool for convenient 
			travel planning`,
		infoRu: `Приложение для фильтрации авиабилетов помогает пользователям быстро находить и выбирать 
			наиболее подходящие рейсы, используя различные критерии, такие как цена, время вылета, 
			авиакомпания и маршрут. Эффективный инструмент для удобного планирования путешествий`,
		techStack: ['Axios', 'React', 'JavaScript', 'SCSS', 'Webpack', 'Yarn'],
		image: project2,
		linkGit: 'https://github.com/kvrdv/avifly',
		linkDeploy: 'https://kvrdv.github.io/avifly/',
	},
	{
		name: 'Kovardaev',
		infoEn: `My portfolio site contains a variety of web projects that I have created as a frontend programmer. 
			It is a collection of my professional work and skills in the field of web development`,
		infoRu: `Мой сайт-портфолио содержит разнообразные веб-проекты, которые я создал как frontend программист. 
			Это коллекция моей профессиональной работы и навыков в области веб-разработки`,
		techStack: [
			'Next',
			'TypeScript',
			'Webpack',
			'npm',
			'Tailwind',
			'Figma',
			'Context',
			'PostCSS',
		],
		image: project3,
		linkGit: 'https://github.com/kvrdv/kvrdv',
		linkDeploy: 'https://kvrdv.github.io/kvrdv/',
	},
	{
		name: 'Clock Work',
		infoEn: `The app displays the current time using a verbal description instead of numbers. 
			A stylish and inspiring solution for displaying the time. The design is inspired by the QLOCKTWO watch`,
		infoRu: `Приложение отображает текущее время, используя словесное описание вместо цифр. 
			Стильное и вдохновляющее решение для показа времени. Дизайн вдохновлен часами QLOCKTWO`,
		techStack: ['JavaScript', 'React', 'Webpack', 'CSS', 'npm'],
		image: project4,
		linkGit: 'https://github.com/kvrdv/clock-work',
		linkDeploy: 'https://kvrdv.github.io/clock-work/',
	},
	{
		name: 'Unqwerty',
		infoEn: `A password manager developed in React. It provides secure storage and convenient management 
			of your passwords. Its simple and intuitive interface makes it an ideal tool for managing your digital security`,
		infoRu: `Менеджер паролей, разработанный на React. Он обеспечивает безопасное хранение и удобное 
			управление вашими паролями. Простой и интуитивно понятный интерфейс делает его идеальным 
			инструментом для управления вашей цифровой безопасностью`,
		techStack: [
			'React',
			'TypeScript',
			'React Router',
			'SCSS',
			'Axios',
			'Vite',
			'Tanstack Query',
		],
		image: project5,
		linkGit: 'https://github.com/kvrdv/unqwerty-front-react',
	},
	{
		name: 'Node.js Demo',
		infoEn: `A demo project on Node.js online educational course store is an example of my skills in backend development. It implements the functions 
			server, data processing and database interaction. Demonstration of my work on 
			server-side web applications`,
		infoRu: `Демо-проект на Node.js онлайн-магазин образовательных курсов - это пример моих навыков в бэкенд-разработке. В нем реализованы функции 
			сервера, обработка данных и взаимодействие с базой данных. Демонстрация моей работы на 
			серверной стороне веб-приложений`,
		techStack: ['Node.js', 'MongoDB', 'Handlebars', 'Nodemailer'],
		image: project6,
		linkGit: 'https://github.com/kvrdv/nodejs-test',
	},
	{
		name: 'Express.js Demo',
		infoEn: `A password generator backend on the Express.js platform. It provides secure and flexible 
			creation of strong passwords, providing APIs for embedded solutions and integration into other applications. 
			Designed for security and user experience`,
		infoRu: `Бэкенд генератора паролей на платформе Express.js. Оно обеспечивает безопасное и гибкое 
			создание надежных паролей, предоставляя API для встроенных решений и интеграции в другие приложения. 
			Спроектировано для обеспечения безопасности и удобства пользователей`,
		techStack: [
			'Node.js',
			'PostgreSQL',
			'Prisma',
			'JavaScript',
			'Express.js',
		],
		image: project7,
		linkGit: 'https://github.com/kvrdv/unqwerty-back-express',
	},
	{
		name: 'Nest.js Demo',
		infoEn: `A password generator backend built on top of Nest.js. It provides a powerful and secure way to generate strong 
			passwords via REST API. A robust solution to secure your data and applications`,
		infoRu: `Бэкенд генератора паролей, созданное на базе Nest.js. Оно предоставляет мощный и безопасный способ 
			генерации надежных паролей через REST API. Надежное решение для обеспечения безопасности ваших данных и приложений`,
		techStack: ['TypeScript', 'Nest.js', 'MongoDB', 'Passport'],
		image: project8,
		linkGit: 'https://github.com/kvrdv/unqwerty-back-nest',
	},
	{
		name: 'Excel file compare',
		infoEn: `The application accepts 2 JSON files and returns 1 file as a result. 
		After processing, the statistics of operations is displayed. The files have the format: number/mathematical operation, 
		if the operation coincides in the passed files, it is necessary to perform it with numbers from the files 
		and save the result in the third file`,
		infoRu: `Приложение принимает 2 JSON-файла и возвращает 1 файл в качестве результата. 
			После обработки отображается статистика операций. Файлы имеют формат: число/математическая операция, 
			если операция совпадает в переданных файлах, необходимо выполнить ее с числами из файлов 
			и сохранить результат в третьем файле`,
		techStack: ['JavaScript', 'Node.js', 'CSS', 'HTML', 'JSON', 'CSV'],
		image: project9,
		linkGit: 'https://github.com/kvrdv/test-gpb',
	},
	{
		name: 'GraphQL Demo',
		infoEn: `A simple and straightforward example of how GraphQL works. Here you will see how to create queries and 
			interact with data using this technology`,
		infoRu: `Простой и понятный пример того, как работает GraphQL. Здесь вы увидите, как создавать запросы и 
			взаимодействовать с данными с помощью этой технологии`,
		techStack: ['MySQL', 'GraphQL', 'Express.js', 'Node,js', 'JavaScript'],
		image: project10,
		linkGit: 'https://github.com/kvrdv/graphql-test',
	},
	{
		name: 'REST API Demo',
		infoEn: `REST API demo project is an illustrative example of implementing a RESTful web service. 
			Here you will find a simple way to interact with data via HTTP requests, demonstrating the basics of REST APIs`,
		infoRu: `Демо-проект REST API - это наглядный пример реализации RESTful веб-сервиса. 
			Здесь вы найдете простой способ взаимодействия с данными через HTTP-запросы, демонстрируя основы REST API`,
		techStack: ['JavaScript', 'MySQL', 'Express.js', 'Node,js', 'REST API'],
		image: project11,
		linkGit: 'https://github.com/kvrdv/mysql-rest-api-test',
	},
	{
		name: 'Craft drinks',
		infoEn: `Craft Beverage Producer Website is a web resource I developed. 
			It provides information about a variety of craft beverages created with special attention to detail. 
			Users can view the product catalog and learn more about the production process`,
		infoRu: `Сайт производителя крафтовых напитков - это веб-ресурс, который я разработал. 
			Здесь представлена информация о разнообразных авторских напитках, созданных с особым вниманием к деталям. 
			Пользователи могут ознакомиться с каталогом продукции и узнать больше о производственном процессе`,
		techStack: ['React', 'JavaScript', 'SCSS', 'Webpack', 'HTML'],
		image: project12,
		linkGit: 'https://github.com/kvrdv/kbact',
		linkDeploy: 'https://kvrdv.github.io/kbact/',
	},
	{
		name: 'Cat web portal',
		infoEn: `An online resource that offers a variety of products and accessories for cats. 
			Here you will find everything you need for the care and entertainment of your furry friends`,
		infoRu: `Интернет-ресурс, где представлены разнообразные товары и аксессуары для кошек. 
			Здесь вы найдете все необходимое для ухода и развлечения ваших пушистых друзей`,
		techStack: ['JavaScript', 'SCSS', 'Webpack', 'HTML'],
		image: project13,
		linkGit: 'https://github.com/kvrdv/keksby',
		linkDeploy: 'https://kvrdv.github.io/keksby/',
	},
	{
		name: 'Noemi',
		infoEn: `An informational resource providing up-to-date news and articles on 
			various aspects of the arts, health, lifestyle and many other topics`,
		infoRu: `Информационный ресурс, предоставляющий актуальные новости и статьи о 
			различных аспектах искусства, здоровья, образа жизни и многих других тем`,
		techStack: ['HTML', 'CSS', 'Pixel Perfect', 'Figma'],
		image: project14,
		linkGit: 'https://github.com/kvrdv/noemi',
		linkDeploy: 'https://kvrdv.github.io/noemi/',
	},
	{
		name: 'Surface',
		infoEn: `A collection of useful materials and tools designed to help 
			athletes develop skills and improve performance`,
		infoRu: `Собрание полезных материалов и инструментов, предназначенных для развития 
			навыков и улучшения результатов спортсменов`,
		techStack: ['JavaScript', 'CSS', 'HTML', 'Figma'],
		image: project15,
		linkGit: 'https://github.com/kvrdv/surface',
		linkDeploy: 'https://kvrdv.github.io/surface/',
	},
	{
		name: 'Password Generator',
		infoEn: `A tool that creates strong and unique passwords, 
			securing your online accounts and data`,
		infoRu: `Инструмент, создающий надежные и уникальные пароли, 
			обеспечивая безопасность ваших онлайн аккаунтов и данных`,
		techStack: ['JavaScript', 'CSS', 'HTML', 'Figma', 'Webpack', 'Figma'],
		image: project16,
		linkGit: 'https://github.com/kvrdv/unqwertier',
		linkDeploy: 'https://kvrdv.github.io/unqwertier/',
	},
];

export default projectsData;

import { FC } from 'react';
import Project from './(project)/Project';
import styles from './Projects.module.scss';
import data from './projects.data';

const Projects: FC = () => {
	return (
		<div className={styles.container}>
			<div>
				{data
					.filter((item) => data.indexOf(item) % 2 === 0)
					.map((item) => {
						return <Project {...item} />;
					})}
			</div>
			<div>
				{data
					.filter((item) => data.indexOf(item) % 2 !== 0)
					.map((item) => {
						return <Project {...item} />;
					})}
			</div>
		</div>
	);
};

export default Projects;

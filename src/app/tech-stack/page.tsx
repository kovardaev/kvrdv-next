import { FC } from 'react';
import styles from './TechStack.module.scss';
import data from './tech-stack.data';

const TechStack: FC = () => {
	return (
		<div className={styles.container}>
			{data
				.sort((a, b) => a.sort - b.sort)
				.map((element) => {
					return (
						<div className={styles.item}>
							<span>{element}</span>
						</div>
					);
				})}
		</div>
	);
};

export default TechStack;

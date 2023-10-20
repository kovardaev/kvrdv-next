import { FC } from 'react';
import styles from './Links.module.scss';
import linksData from './links.data';
import { v4 as uuidv4 } from 'uuid';

const Links: FC = () => {
	return (
		<div className={styles.container}>
			{linksData.map(({ title, link }) => {
				return (
					<a key={uuidv4()} href={link} target="_blank">
						<span>{title}</span>
					</a>
				);
			})}
		</div>
	);
};

export default Links;

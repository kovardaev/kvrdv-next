import { FC } from 'react';
import styles from './Button.module.scss';

type Props = {
	title: string;
	link: string;
};

const Button: FC = ({ title, link }) => {
	return (
		<button className={styles.button}>
			<a href={link} target="_blank">
				{title}
			</a>
		</button>
	);
};

export default Button;

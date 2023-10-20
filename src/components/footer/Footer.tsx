import { FC } from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';

const Footer: FC = () => {
	return (
		<footer className={styles.container}>
			<span>KOVARDAEV &copy; 2023</span>
		</footer>
	);
};

export default Footer;

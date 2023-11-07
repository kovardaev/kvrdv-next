import { FC } from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import telegramLogoDark from '../../assets/images/telegram-logo-dark.svg';
import githubLogoDark from '../../assets/images/github-logo-dark.svg';
import linkedinLogoDark from '../../assets/images/linkedin-logo-dark.svg';

const Footer: FC = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.logos}>
				<a href="https://t.me/kvrdv" target="_blank">
					<Image
						className={styles.logo}
						src={telegramLogoDark}
						quality={100}
						alt={'telegram logo'}
						draggable={false}
					/>
				</a>
				<a href="https://github.com/kvrdv" target="_blank">
					<Image
						className={styles.logo}
						src={githubLogoDark}
						quality={100}
						alt={'github logo'}
						draggable={false}
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/kovardaev/"
					target="_blank"
				>
					<Image
						className={styles.logo}
						src={linkedinLogoDark}
						quality={100}
						alt={'linkedin logo'}
						draggable={false}
					/>
				</a>
			</div>

			<span>KOVARDAEV &copy; 2023</span>
		</footer>
	);
};

export default Footer;

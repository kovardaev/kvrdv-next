'use client';
import styles from './App.module.scss';
import Image from 'next/image';
import ava from '../assets/images/ava.png';
import { FaInfoCircle } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFileDownload } from 'react-icons/fa';
import { BsPersonSquare } from 'react-icons/bs';
import Button from '@/components/ui/button/Button';
import data from './home.data';
import { LanguageContext } from '@/context/Context';
import { useContext } from 'react';



export default function Home() {
	const { language } = useContext(LanguageContext);

	let content = language === 'en' ? data.en : data.ru;

	return (
		<main className={styles.container}>
			<div className={styles.bio}>
				<div className={styles.block}>
					<h3>
						<FaInfoCircle className={styles.icon} size={22} />
						{content.aboutHeader}
					</h3>
					<p>{content.aboutContent}</p>
				</div>
				<div className={styles.resume}>
					<div className={styles.block}>
						<h3>
							<FaLinkedin className={styles.icon} size={22} />
							{content.linkedInHeader}
						</h3>
						<Button
							title={content.linkedInButton}
							link={'https://www.linkedin.com/in/kvrdv'}
						/>
					</div>
					<div className={styles.block}>
						<h3>
							<BsPersonSquare className={styles.icon} size={22} />
							{content.headHunterHeader}
						</h3>
						<Button
							title={content.headHunterButton}
							link={'https://hh.ru/resume/69d96dc3ff0c7d57df0039ed1f4d77444f747a'}
						/>
					</div>
				</div>
				<div className={styles.block}>
					<h3>
						<FaFileDownload className={styles.icon} size={20} />
						{content.downloadHeader}
					</h3>
					<div>
						<Button
							title={content.downloadButtonEn}
							link={'/Kovardaev_Resume_EN.pdf'}
							download="Kovardaev_Resume_EN"
						/>
						<Button
							title={content.downloadButtonRu}
							link={'/Kovardaev_Resume_RU.pdf'}
							download="Kovardaev_Resume_RU"
						/>
					</div>
				</div>
			</div>
		</main>
	);
}

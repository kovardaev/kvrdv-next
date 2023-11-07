'use client';
import { FC, useContext } from 'react';
import styles from '../Sidebar.module.scss';
import cn from 'classnames';
import { LanguageContext } from '@/context/Context';
import data from '../sidebar.data';
import { usePathname } from 'next/navigation';

const Language: FC = () => {
	const { language, setLanguage } = useContext(LanguageContext);
	const pathname = usePathname();
	let content = language === 'en' ? data.en.language : data.ru.language;

	return (
		<div className={styles.nav}>
			<h3>{content.header}</h3>
			<ul>
				<li onClick={() => setLanguage('en')}>
					<span
						className={cn({
							[styles.active]: language === 'en',
						})}
					>
						{content.menu1}
					</span>
				</li>
				<li onClick={() => setLanguage('ru')}>
					<span
						className={cn({
							[styles.active]: language === 'ru',
						})}
					>
						{content.menu2}
					</span>
				</li>
			</ul>
		</div>
	);
};

export default Language;

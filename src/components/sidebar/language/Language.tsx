'use client';
import { FC, useContext } from 'react';
import styles from '../Sidebar.module.scss';
import { TbLanguageOff } from 'react-icons/tb';
import { TbLanguage } from 'react-icons/tb';
import { BsFillLightbulbOffFill } from 'react-icons/bs';
import { BsFillLightbulbFill } from 'react-icons/bs';
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
				<li
					className={cn({
						[styles.active]: language === 'en',
					})}
					onClick={() => setLanguage('en')}
				>
					<TbLanguageOff className={styles.icon} size={22} />
					<span>{content.menu1}</span>
				</li>
				<li
					className={cn({
						[styles.active]: language === 'ru',
					})}
					onClick={() => setLanguage('ru')}
				>
					<TbLanguage className={styles.icon} size={22} />
					<span>{content.menu2}</span>
				</li>
			</ul>
		</div>
	);
};

export default Language;

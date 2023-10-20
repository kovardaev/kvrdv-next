'use client';
import { FC, useContext } from 'react';
import styles from '../Sidebar.module.scss';
import { TbLanguageOff } from 'react-icons/tb';
import { TbLanguage } from 'react-icons/tb';
import { BsFillLightbulbOffFill } from 'react-icons/bs';
import { BsFillLightbulbFill } from 'react-icons/bs';
import cn from 'classnames';
import { ThemeContext } from '@/context/Context';
import { usePathname } from 'next/navigation';
import { LanguageContext } from '@/context/Context';
import data from '../sidebar.data';

const Theme: FC = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	const pathname = usePathname();
	const { language } = useContext(LanguageContext);
	let content = language === 'en' ? data.en.theme : data.ru.theme;

	return (
		<div className={styles.theme}>
			<div className={styles.nav}>
				<h3>{content.header}</h3>
				<ul>
					<li
						className={cn({
							[styles.active]: theme === 'dark',
						})}
						onClick={() => setTheme('dark')}
					>
						<BsFillLightbulbOffFill
							className={styles.icon}
							size={16}
						/>
						<span>{content.menu1}</span>
					</li>
					<li
						className={cn({
							[styles.active]: theme === 'light',
						})}
						onClick={() => setTheme('light')}
					>
						<BsFillLightbulbFill
							className={styles.icon}
							size={16}
						/>
						<span>{content.menu2}</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Theme;

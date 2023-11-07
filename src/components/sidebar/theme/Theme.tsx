'use client';
import { FC, useContext } from 'react';
import styles from '../Sidebar.module.scss';
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
					<li onClick={() => setTheme('dark')}>
						<span
							className={cn({
								[styles.active]: theme === 'dark',
							})}
						>
							{content.menu1}
						</span>
					</li>
					<li onClick={() => setTheme('light')}>
						<span
							className={cn({
								[styles.active]: theme === 'light',
							})}
						>
							{content.menu2}
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Theme;

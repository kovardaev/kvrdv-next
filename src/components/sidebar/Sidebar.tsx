'use client';
import { FC, useContext, useEffect } from 'react';
import styles from './Sidebar.module.scss';
import Menu from './menu/Menu';
import Theme from './theme/Theme';
import Language from './language/Language';
import { LanguageContext, ThemeContext } from '@/context/Context';
import cn from 'classnames';

const Sidebar: FC = () => {
	const { theme } = useContext(ThemeContext);
	// const { language } = useContext(LanguageContext);

	return (
		<div
			id="sidebar"
			className={cn({
				[styles.container]: true,
			})}
		>
			<Menu />
			<div className={styles.theme}>
				{/* <Language /> */}
				{/* <Theme /> */}
			</div>
		</div>
	);
};

export default Sidebar;

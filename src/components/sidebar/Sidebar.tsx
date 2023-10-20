'use client';
import { FC, useContext } from 'react';
import styles from './Sidebar.module.scss';
import Menu from './menu/Menu';
import Theme from './theme/Theme';
import Language from './language/Language';
import { ThemeContext } from '@/context/Context';
import cn from 'classnames';

const Sidebar: FC = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<div
			className={cn({
				[styles.container]: true,
				dark: theme === 'dark',
			})}
		>
			<Menu />
			<div className={styles.theme}>
				<Language />
				<Theme />
			</div>
		</div>
	);
};

export default Sidebar;

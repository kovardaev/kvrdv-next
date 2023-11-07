'use client';
import { FC, useContext, useEffect } from 'react';
import Link from 'next/link';
import styles from '../Sidebar.module.scss';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import { LanguageContext } from '@/context/Context';
import data from '../sidebar.data';

const Menu: FC = () => {
	const pathname = usePathname();
	const { language } = useContext(LanguageContext);
	let content = language === 'en' ? data.en.menu : data.ru.menu;

	return (
		<div className={styles.nav}>
			<h3>{content.header}</h3>
			<ul>
				<li>
					<Link href="/">
						<span
							className={cn({
								[styles.active]: pathname === '/',
							})}
						>
							{content.menu1}
						</span>
					</Link>
				</li>
				<li>
					<Link href="/projects">
						<span
							className={cn({
								[styles.active]: pathname === '/projects',
							})}
						>
							{content.menu2}
						</span>
					</Link>
				</li>
				<li>
					<Link href="/tech-stack">
						<span
							className={cn({
								[styles.active]: pathname === '/tech-stack',
							})}
						>
							{content.menu3}
						</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Menu;

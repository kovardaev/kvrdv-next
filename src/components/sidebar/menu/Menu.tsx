'use client';
import { FC, useContext } from 'react';
import Link from 'next/link';
import styles from '../Sidebar.module.scss';
import { FaHome } from 'react-icons/fa';
import { BsStack } from 'react-icons/bs';
import { FaTools } from 'react-icons/fa';
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
				<li
					className={cn({
						[styles.active]: pathname === '/',
					})}
				>
					<Link href="/">
						<FaHome className={styles.icon} size={18} />
						<span>{content.menu1}</span>
					</Link>
				</li>
				<li
					className={cn({
						[styles.active]: pathname === '/projects',
					})}
				>
					<Link href="/projects">
						<BsStack className={styles.icon} size={18} />
						<span>{content.menu2}</span>
					</Link>
				</li>
				<li
					className={cn({
						[styles.active]: pathname === '/tech-stack',
					})}
				>
					<Link href="/tech-stack">
						<FaTools className={styles.icon} size={16} />
						<span>{content.menu3}</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Menu;

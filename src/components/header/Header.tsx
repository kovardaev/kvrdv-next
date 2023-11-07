'use client';
import { FC, useContext, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import data from './header.data';
import { LanguageContext } from '@/context/Context';

const Header: FC = () => {
	const pathname = usePathname();
	const { language } = useContext(LanguageContext);

	let content = language === 'en' ? data.en : data.ru;

	let initialHeader = null;
	let initialSubHeader = null;
	let initialImage = null;

	switch (pathname) {
		case '/projects':
			initialHeader = content.projects.header;
			initialSubHeader = content.projects.subHeader;
			initialImage = content.projects.image;
			break;
		case '/tech-stack':
			initialHeader = content.techStack.header;
			initialSubHeader = content.techStack.subHeader;
			initialImage = content.techStack.image;
			break;
		default:
			initialHeader = content.home.header;
			initialSubHeader = content.home.subHeader;
			initialImage = content.home.image;
	}

	const [header, setHeader] = useState(initialHeader);
	const [subHeader, setSubHeader] = useState(initialSubHeader);
	const [image, setImage] = useState(initialImage);

	useEffect(() => {
		switch (pathname) {
			case '/projects':
				setImage(content.projects.image);
				setHeader(content.projects.header);
				setSubHeader(content.projects.subHeader);
				break;
			case '/tech-stack':
				setImage(content.techStack.image);
				setHeader(content.techStack.header);
				setSubHeader(content.techStack.subHeader);
				break;
			default:
				setImage(content.home.image);
				setHeader(content.home.header);
				setSubHeader(content.home.subHeader);
		}
	}, [pathname, language]);

	return (
		<div className={styles.container}>
			<Image
				src={image}
				quality={100}
				alt={'abstract header'}
				draggable={false}
			/>
			<h1 id="header-head">{header}</h1>
			<h3 id="header-sub">{subHeader}</h3>
		</div>
	);
};

export default Header;

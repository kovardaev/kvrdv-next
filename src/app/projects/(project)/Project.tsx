'use client';
import { FC, useContext } from 'react';
import styles from '../Projects.module.scss';
import Image from 'next/image';
import Button from '@/components/ui/button/Button';
import { FaInfoCircle } from 'react-icons/fa';
import { BsCardHeading } from 'react-icons/bs';
import IProjectProps from '@/types/project.types';
import { LanguageContext } from '@/context/Context';

const Project: FC = ({
	id,
	name,
	infoEn,
	infoRu,
	techStack,
	image,
	linkGit,
	linkDeploy,
}: IProjectProps) => {
	const { language } = useContext(LanguageContext);

	return (
		<div className={styles.project} key={id}>
			<div className={styles.info}>
				<div>
					<Image
						src={image}
						quality={100}
						alt="project image"
						draggable={false}
					/>
					<h3>{name}</h3>
				</div>
				<p>{language === 'en' ? infoEn : infoRu}</p>
			</div>
			<div className={styles.tech}>
				<h3>{language === 'en' ? 'Tech stack:' : 'Стек технологий:'}</h3>
				<div className={styles.tech}>
					{techStack.map((element) => {
						return <span>{element}</span>;
					})}
				</div>
			</div>
			<div className={styles.buttons}>
				<Button title="GitHub" link={linkGit} />
				{linkDeploy ? <Button title="Deploy" link={linkDeploy} /> : null}
				
			</div>
		</div>
	);
};

export default Project;

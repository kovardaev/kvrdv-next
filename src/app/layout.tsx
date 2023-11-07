import type { Metadata } from 'next';
import '../assets/styles/globals.scss';
import styles from './App.module.scss';
import Sidebar from '@/components/sidebar/Sidebar';
import Links from '@/components/links/Links';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Provider from '@/providers/Provider';
import { Unbounded } from 'next/font/google';

export const metadata: Metadata = {
	title: 'KOVARDAEV',
	description: 'Frontend Development',
};

const font = Unbounded({
	subsets: ['cyrillic', 'latin'],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={font.className}>
			<Provider>
				<body className={styles.body}>
					<Sidebar />
					<div className={styles.content}>
						<Header />
						<Links />
						{children}
						<Footer />
					</div>
				</body>
			</Provider>
		</html>
	);
}

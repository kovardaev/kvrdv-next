'use client';
import { FC, useState } from 'react';
import { LanguageContext, ThemeContext } from '../context/Context';

const Provider: FC = ({ children }) => {
	const [language, setLanguage] = useState('en');
	const [theme, setTheme] = useState('light');

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			<ThemeContext.Provider value={{ theme, setTheme }}>
				{children}
			</ThemeContext.Provider>
		</LanguageContext.Provider>
	);
};

export default Provider;

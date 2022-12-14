import { Theme } from '@emotion/react';
import React from 'react';
import { colors } from 'src/constants';
import commonColors from './commonColors';
import light from './light';

type ThemeContext = {
	theme: Theme;
	//  toggleTheme: () => void
};

export const ThemeContext = React.createContext<ThemeContext>({} as ThemeContext);

type TThemeProvider = {
	children: React.ReactNode;
};
export const ThemeProvider = ({ children }: TThemeProvider) => {
	const [theme, setTheme] = React.useState<Theme>({ palette: { colors, ...commonColors, ...light } });

	React.useEffect(() => {
		// const theme = {  colors: { common, ...light } };
		// setTheme(theme);
	}, []);

	// const toggleTheme = React.useCallback(() => {
	// 	setTheme(theme === 'light' ? 'dark' : 'light');
	// }, []);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				// toggleTheme
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

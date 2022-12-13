import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'src/redux/reducers';
import common from './common';
import light from './light';

export type ITheme = {
	colors: {
		primary: {
			main: string;
			light: string;
		};
		secondary: {
			main: string;
			light: string;
		};
		error: {
			main: string;
			light: string;
		};
		common: {
			white: string;
			black: string;
			gray: string;
			steel: string;
		};
		background: {
			main: string;
			light: string;
			contrast: string;
			disabled: string;
		};
		typography: {
			main: string;
			light: string;
			contrast: string;
		};
		footer: {
			main: string;
		};
		type: 'light';
	};
};
type ThemeContext = {
	theme: ITheme;
	//  toggleTheme: () => void
};

export const ThemeContext = React.createContext<ThemeContext>({} as ThemeContext);

type TThemeProvider = {
	children: React.ReactNode;
};
export const ThemeProvider = ({ children }: TThemeProvider) => {
	const [theme, setTheme] = React.useState<ITheme>({ colors: { common, ...light } });

	React.useEffect(() => {
		const theme = { colors: { common, ...light } };

		setTheme(theme);
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

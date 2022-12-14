import '@emotion/react';
import { TColors } from './constants/colors';

declare module '@emotion/react' {
	export interface Theme {
		palette: {
			primary: {
				main: string;
				light: string;
			};
			secondary: {
				main: string;
				light: string;
			};
			background: {
				main: string;
				light: string;
			};
			common: {
				white: string;
				black: string;
				gray: string;
				steel: string;
			};
			type: 'light' | 'dark';
			colors: TColors;
		};
	}
}

// // You are also able to use a 3rd party theme this way:
// import '@emotion/react'
// import { LibTheme } from 'some-lib'

// declare module '@emotion/react' {
//   export interface Theme extends LibTheme {}
// }

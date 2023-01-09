import { css, Global } from '@emotion/react';

export default () => (
	<Global
		styles={css`
			* {
				outline: none;
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}
			html {
				height: 100%;
				// font-family: 'NotoNormal';
				// font-family: 'OswaldRegular';
				font-family: 'Poppins';
			}
			body {
				height: 100%;
			}
			#root {
				height: 100%;
			}
			input:-webkit-autofill,
			input:-webkit-autofill:focus {
				transition: background-color 600000s 0s, color 600000s 0s;
			}
			input[data-autocompleted] {
				background-color: transparent !important;
			}
		`}
	/>
);

import { css, Global, Theme } from '@emotion/react';
import { hexToRgba } from 'src/utils';

export default ({ theme }: { theme: Theme }) => (
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
				font-family: 'NotoNormal';
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
			.rrt-warning {
				&&& {
					box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
					${theme.palette.type === 'light'
						? `
						background: linear-gradient(125deg, ${hexToRgba('#a951ed', 0.6)}, ${hexToRgba('#02ccba', 0.4)});
					`
						: `
						background-color: rgba(0, 0, 0, 0.7);
					`}
					backdrop-filter: blur(10px);
					.rrt-progress-container {
						margin-left: 0rem;
					}
				}
			}
			.close-toastr {
				&&&& {
					color: #ffffff;
					opacity: 1;
					margin-right: 1rem;
				}
			}
			.rrt-info {
				&&& {
					box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
					${theme.palette.type === 'light'
						? `
						background: linear-gradient(125deg, ${hexToRgba('#a951ed', 0.6)}, ${hexToRgba('#02ccba', 0.4)});
					`
						: `
						background-color: rgba(0, 0, 0, 0.7);
					`}
					backdrop-filter: blur(10px);
				}
			}
			.rrt-success {
				&&& {
					box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
					${theme.palette.type === 'light'
						? `
						background: linear-gradient(125deg, ${hexToRgba('#a951ed', 0.6)}, ${hexToRgba('#02ccba', 0.4)});
					`
						: `
						background-color: rgba(0, 0, 0, 0.7);
					`}
					backdrop-filter: blur(10px);
				}
			}
			.rrt-error {
				&&& {
					box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
					${theme.palette.type === 'light'
						? `
						background: linear-gradient(125deg, ${hexToRgba('#a951ed', 0.6)}, ${hexToRgba('#02ccba', 0.4)});
					`
						: `
						background-color: rgba(0, 0, 0, 0.7);
					`}
					backdrop-filter: blur(10px);
				}
			}

			.rrt-middle-container {
				&&& {
					// padding: 2rem 5rem;
					margin: 0rem 5rem;
				}
			}
		`}
	/>
);

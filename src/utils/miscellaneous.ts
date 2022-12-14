export { default as errorHandler } from './errorHandler';

// input: (#FFFFFF, 0.5), output: rgba(255, 255, 255, 0.5)
export const hexToRgba = (rgbaColor: string, opacity: number): string =>
	`rgba(${parseInt(rgbaColor.substring(1, 3), 16)}, ${parseInt(rgbaColor.substring(3, 5), 16)}, ${parseInt(
		rgbaColor.substring(5, 7),
		16,
	)}, ${opacity})`;

export const generatePath = ({ uri, base }: { uri: string; base?: string }) => `${base || ''}${uri}`;

export const generateEndpointPath = ({ path }: { path: string }) => `/api/${path}`;

export const generateNumberInRange = (num = 6) => {
	const max = parseInt(`1${'0'.repeat(num - 1)}`);
	const min = max / 10 - 1;

	return Math.floor(Math.random() * (Math.ceil(max) - Math.floor(min) + 1) + min).toString();
};

export const getTimeZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

export const formatDateToLocale = ({ date }: { date: string }) =>
	new Date(date).toLocaleString(window.navigator.language, {
		timeZone: getTimeZone(),
		// dateStyle: 'medium',
		// timeStyle: 'short',
		hour: 'numeric',
		minute: 'numeric',
		day: 'numeric',
		month: 'short',
	});

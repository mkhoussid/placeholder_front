import axios from 'axios';
import { getTimeZone } from 'src/utils';
import countries from './countries';
import timezones from './timezones';

type TGetLocationResponse = {
	country: string | null;
	state: string | null;
};
const getLocation = (): TGetLocationResponse => {
	const timezone = getTimeZone();

	axios.defaults.headers['user-timezone'] = timezone || 'Europe/Moscow';

	if (!timezone) {
		return { country: null, state: null };
	}

	const _country = timezones[timezone as keyof typeof timezones].c[0];
	const country = countries[_country as keyof typeof countries];
	const state = timezone.split('/')[1].replace('_', ' ');

	return { country, state };
};

export default getLocation;

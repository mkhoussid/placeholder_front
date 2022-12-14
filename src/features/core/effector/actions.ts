import { EMethodTypes, httpClient } from 'src/services/httpClient';
import getLocation from '../geolocation';
import { createAndExecuteEffect, errorHandler, generateEndpointPath } from 'src/utils';
import { initSocket } from 'src/socket';
import { setUser } from 'src/features/auth/effector/actions';
import apis from 'src/router/apis';
import { setGeolocationEvent, setInitLoadingEvent } from './events';
import { Core } from '../core';
import { createEffect } from 'effector';
import { Auth } from 'src/features/auth/auth';

type TSetInitLoading = {
	payload: {
		initLoading: boolean;
	};
};
export const setInitLoading = ({ payload: { initLoading } }: TSetInitLoading) => {
	setInitLoadingEvent(initLoading);
};

type TSetGeolocation = {
	payload: {
		geolocation: Core.Geolocation;
	};
};
export const setGeolocation = ({ payload: { geolocation } }: TSetGeolocation) => {
	setGeolocationEvent(geolocation);
};

type TInit = {
	payload: {
		isMobile: boolean;
	};
};
export const init = async ({ payload: { isMobile } }: TInit) => {
	try {
		setInitLoading({ payload: { initLoading: true } });

		const { user } = await createAndExecuteEffect<{ user: Auth.User }>({
			handler: () =>
				httpClient({
					url: generateEndpointPath({ path: apis.INIT.ROOT }),
					method: EMethodTypes.POST,
				}),
		});

		const { country, state } = getLocation();

		setUser({ payload: { user } });
		setGeolocation({ payload: { geolocation: { country, state } } });

		initSocket();
	} catch (err) {
		errorHandler({ payload: { err } });
	} finally {
		setInitLoading({ payload: { initLoading: false } });
	}
};

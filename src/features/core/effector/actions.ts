import { EMethodTypes, httpClient } from 'src/services/httpClient';
import getLocation from '../geolocation';
import { createAndExecuteEffect, errorHandler, generateEndpointPath } from 'src/utils';
import { initSocket } from 'src/socket';
import { setUser } from 'src/features/auth/effector/actions';
import apis from 'src/router/apis';
import { setGeolocationEvent, setInitLoadingEvent, setServerErrorEvent } from './events';
import { Core } from '../core';
import { createEffect } from 'effector';
import { Auth } from 'src/features/auth/auth';
import { ActionBase } from 'src/global';
import { TServerErrorMatrixContent } from 'src/constants';

type TSetInitLoading = {
	payload: {
		initLoading: boolean;
	};
};
export const setInitLoading = ({ payload: { initLoading } }: TSetInitLoading) => {
	setInitLoadingEvent(initLoading);
};

export const setGeolocation = ({ payload: { geolocation } }: ActionBase<{ geolocation: Core.Geolocation }>) => {
	setGeolocationEvent(geolocation);
};

export const setServerError = ({
	payload: { serverError },
}: ActionBase<{ serverError: TServerErrorMatrixContent }>) => {
	setServerErrorEvent(serverError);
};

export const init = async ({ payload: { isMobile }, watchers }: ActionBase<{ isMobile: boolean }>) => {
	try {
		await createAndExecuteEffect({
			prehandler: () => setInitLoading({ payload: { initLoading: true } }),
			handler: async () =>
				httpClient({
					url: generateEndpointPath({ path: apis.INIT.ROOT }),
					method: EMethodTypes.POST,
				}),
			watchers: {
				doneDataWatcher: ({ user }: { user: Auth.User }) => {
					setUser({ payload: { user } });
				},
				finallyWatcher: (result) => {
					console.log('result', result);
				},
			},
		});

		const { country, state } = getLocation();

		setGeolocation({ payload: { geolocation: { country, state } } });

		initSocket();
	} catch (err) {
		errorHandler({ payload: { err } });
	} finally {
		setInitLoading({ payload: { initLoading: false } });
	}
};

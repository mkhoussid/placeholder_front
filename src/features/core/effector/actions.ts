import { createPostBody, EMethodTypes, httpClient } from 'src/services/httpClient';
import getLocation from '../geolocation';
import { createAndExecuteEffect, errorHandler, generateEndpointPath } from 'src/utils';
import { initSocket } from 'src/socket';
import { setUser } from 'src/features/auth/effector/actions';
import apis from 'src/router/apis';
import {
	setGeolocationEvent,
	setHeaderLinksEvent,
	setInitLoadingEvent,
	setIsMobileEvent,
	setServerErrorEvent,
	setDictionaryEvent,
} from './events';
import { Core } from '../core';
import { Auth } from 'src/features/auth/auth';
import { ActionBase } from 'src/global';
import { TServerErrorMatrixContent } from 'src/constants';

export const setInitLoading = ({ payload: { initLoading } }: ActionBase<{ initLoading: boolean }>) => {
	setInitLoadingEvent(initLoading);
};

export const setIsMobile = ({ payload: { isMobile } }: ActionBase<{ isMobile: boolean }>) => {
	setIsMobileEvent(isMobile);
};

export const setGeolocation = ({ payload: { geolocation } }: ActionBase<{ geolocation: Core.Geolocation }>) => {
	setGeolocationEvent(geolocation);
};

export const setHeaderLinks = ({ payload: { headerLinks } }: ActionBase<{ headerLinks: Core.HeaderLink[] }>) => {
	setHeaderLinksEvent(headerLinks);
};

export const setDictionary = ({ payload: { dictionary } }: ActionBase<{ dictionary: Core.Dictionary }>) => {
	setDictionaryEvent(dictionary);
};

export const setServerError = ({
	payload: { serverError },
}: ActionBase<{ serverError: TServerErrorMatrixContent }>) => {
	setServerErrorEvent(serverError);
};

export const init = async () => {
	try {
		await createAndExecuteEffect({
			prehandler: () => setInitLoading({ payload: { initLoading: true } }),
			handler: async () =>
				httpClient({
					url: generateEndpointPath({ path: apis.INIT.ROOT }),
					method: EMethodTypes.POST,
					body: createPostBody({ language: window.navigator.language }),
				}),
			watchers: {
				doneDataWatcher: ({
					user,
					dictionary,
				}: {
					user: Auth.User;
					dictionary: Core.Dictionary;
				}) => {
					setUser({ payload: { user } });
					setDictionary({ payload: { dictionary } });
				},
				finallyWatcher: (res) => {
					console.log('res', res);
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

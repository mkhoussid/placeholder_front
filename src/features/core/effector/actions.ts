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
	setRequestLoadingEvent,
	setIsMobileEvent,
	setServerErrorEvent,
	setInputErrorsEvent,
	setDictionaryEvent,
	setLayoutEvent,
} from './events';
import { Core } from '../core';
import { Auth } from 'src/features/auth/auth';
import { ActionBase } from 'src/global';
import { TServerErrorMatrixContent } from 'src/constants';
import { AxiosError } from 'axios';
import { ExtendedAxiosError } from 'src/utils/errorHandler';
import media from 'src/assets/media/cdn';

export const setInitLoading = ({ payload: { initLoading } }: ActionBase<{ initLoading: boolean }>) => {
	setInitLoadingEvent(initLoading);
};

export const setRequestLoading = ({ payload: { requestLoading } }: ActionBase<{ requestLoading: boolean }>) => {
	setRequestLoadingEvent(requestLoading);
};

export const setIsMobile = ({ payload: { isMobile } }: ActionBase<{ isMobile: boolean }>) => {
	setIsMobileEvent(isMobile);
};

export const setGeolocation = ({ payload: { geolocation } }: ActionBase<{ geolocation: Core.Geolocation }>) => {
	setGeolocationEvent(geolocation);
};

export const setLayout = ({ payload: { layout } }: ActionBase<{ layout: Core.Layout }>) => {
	setLayoutEvent(layout);
};

export const setHeaderLinks = ({
	payload: { headerLinks },
}: ActionBase<{ headerLinks: { navHeaderLinks: Core.HeaderLink[]; authenticationLinks: Core.HeaderLink[] } }>) => {
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

export const setInputErrors = ({ payload: { inputErrors } }: ActionBase<{ inputErrors: string[] }>) => {
	setInputErrorsEvent(inputErrors);
};

export const init = async () => {
	try {
		await createAndExecuteEffect({
			prehandler: async () =>
				new Promise((res) => {
					setInitLoading({ payload: { initLoading: true } });
					setRequestLoading({ payload: { requestLoading: true } });
					const loadedImages = [];
					const img = new Image();
					const img2 = new Image();
					const img3 = new Image();
					const img4 = new Image();
					img.src = media['heroImage8_compressed.webp'];
					img2.src = media['fog-low.webp'];
					img3.src = media['clouds.webp'];
					img4.src = media['logo_sitegrass_ru.webp'];

					const handleOnLoad = (imageId: string) => () => {
						loadedImages.push(imageId);
						if (loadedImages.length === 4) {
							res();
						}
					};

					[img, img2, img3, img4].forEach((img, index) => {
						img.onload = handleOnLoad(`img${index}`);
					});
				}),
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
				finallyWatcher: () => {
					setRequestLoading({ payload: { requestLoading: false } });
				},
			},
		});

		const { country, state } = getLocation();

		setGeolocation({ payload: { geolocation: { country, state } } });

		initSocket();
	} catch (err) {
		errorHandler({ payload: { err: err as AxiosError<ExtendedAxiosError> | null } });
	} finally {
		setInitLoading({ payload: { initLoading: false } });
	}
};

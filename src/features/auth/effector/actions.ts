import { AxiosError } from 'axios';
import { setInputErrors, setRequestLoading } from 'src/features/core/effector/actions';
import { ActionBase } from 'src/global';
import apis from 'src/router/apis';
import { createPostBody, EMethodTypes, httpClient } from 'src/services/httpClient';
import { createAndExecuteEffect, errorHandler, generateEndpointPath } from 'src/utils';
import { ExtendedAxiosError } from 'src/utils/errorHandler';
import { Auth } from '../auth';
import { setAuthCodeValueEvent, setAuthEmailValueEvent, setIsLoginSelectionScreenEvent, setUserEvent } from './events';

export const setUser = ({ payload: { user } }: ActionBase<{ user: Auth.User }>) => {
	setUserEvent(user);
};

export const setAuthEmailValue = ({ payload: { authEmailValue } }: ActionBase<{ authEmailValue: string }>) => {
	setAuthEmailValueEvent(authEmailValue);
};

export const setIsLoginSelectionScreen = ({
	payload: { isLoginSelectionScreen },
}: ActionBase<{ isLoginSelectionScreen: boolean }>) => {
	setIsLoginSelectionScreenEvent(isLoginSelectionScreen);
};

export const setAuthCodeValue = ({ payload: { authCodeValue } }: ActionBase<{ authCodeValue: string[] }>) => {
	setAuthCodeValueEvent(authCodeValue);
};

export const doLogin = async ({ payload: { email } }: ActionBase<{ email: string }>) => {
	try {
		await createAndExecuteEffect({
			prehandler: () => {
				setRequestLoading({ payload: { requestLoading: true } });
				setInputErrors({ payload: { inputErrors: [] } });
			},
			handler: async () =>
				httpClient({
					url: generateEndpointPath({ path: apis.AUTH.ROOT }),
					method: EMethodTypes.POST,
					body: createPostBody({ email }),
				}),
			watchers: {
				doneDataWatcher: () => {
					setIsLoginSelectionScreen({ payload: { isLoginSelectionScreen: false } });
				},
				finallyWatcher: () => {
					setRequestLoading({ payload: { requestLoading: false } });
				},
			},
		});
	} catch (err) {
		errorHandler({ payload: { err: err as AxiosError<ExtendedAxiosError> | null } });
	}
};

export const doVerifyCode = async ({
	payload: { email, authCodeValue },
}: ActionBase<{ email: string; authCodeValue: string[] }>) => {
	try {
		await createAndExecuteEffect({
			prehandler: () => {
				setRequestLoading({ payload: { requestLoading: true } });
				setInputErrors({ payload: { inputErrors: [] } });
			},
			handler: async () =>
				httpClient({
					url: generateEndpointPath({ path: apis.AUTH.VERIFY_CODE }),
					method: EMethodTypes.POST,
					body: createPostBody({ email, authCodeValue }),
				}),
			watchers: {
				doneDataWatcher: () => {
					//
				},
				finallyWatcher: () => {
					setRequestLoading({ payload: { requestLoading: false } });
				},
			},
		});
	} catch (err) {
		errorHandler({ payload: { err: err as AxiosError<ExtendedAxiosError> | null } });
	}
};

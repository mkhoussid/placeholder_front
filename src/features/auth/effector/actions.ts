import { AxiosError } from 'axios';
import { setInputErrors, setRequestLoading } from 'src/features/core/effector/actions';
import { ActionBase } from 'src/global';
import apis from 'src/router/apis';
import { createPostBody, EMethodTypes, httpClient } from 'src/services/httpClient';
import { createAndExecuteEffect, errorHandler, generateEndpointPath } from 'src/utils';
import { ExtendedAxiosError } from 'src/utils/errorHandler';
import { Auth } from '../auth';
import { setAuthEmailValueEvent, setUserEvent } from './events';

export const setUser = ({ payload: { user } }: ActionBase<{ user: Auth.User }>) => {
	setUserEvent(user);
};

export const setAuthEmailValue = ({ payload: { authEmailValue } }: ActionBase<{ authEmailValue: string }>) => {
	setAuthEmailValueEvent(authEmailValue);
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
				doneDataWatcher: ({ user }: { user: Auth.User }) => {
					setUser({ payload: { user } });
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

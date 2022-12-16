import { setRequestLoading } from 'src/features/core/effector/actions';
import { ActionBase } from 'src/global';
import apis from 'src/router/apis';
import { createPostBody, EMethodTypes, httpClient } from 'src/services/httpClient';
import { createAndExecuteEffect, errorHandler, generateEndpointPath } from 'src/utils';
import { Auth } from '../auth';
import { setAuthValuesEvent, setUserEvent } from './events';

export const setUser = ({ payload: { user } }: ActionBase<{ user: Auth.User }>) => {
	setUserEvent(user);
};

export const setAuthValues = ({ payload: { authValues } }: ActionBase<{ authValues: Auth.FormValues }>) => {
	setAuthValuesEvent(authValues);
};

export const doLogin = async ({ payload: { authValues } }: ActionBase<{ authValues: Auth.FormValues }>) => {
	try {
		await createAndExecuteEffect({
			prehandler: () => {
				setRequestLoading({ payload: { requestLoading: true } });
			},
			handler: async () =>
				httpClient({
					url: generateEndpointPath({ path: apis.AUTH.ROOT }),
					method: EMethodTypes.POST,
					body: createPostBody({ authValues }),
				}),
			watchers: {
				doneDataWatcher: ({ user }: { user: Auth.User }) => {
					console.log('user!', user);
					setUser({ payload: { user } });
				},
				finallyWatcher: (res) => {
					setRequestLoading({ payload: { requestLoading: false } });
				},
			},
		});
	} catch (err) {
		errorHandler({ payload: { err } });
	}
};

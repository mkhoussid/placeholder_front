import { ThunkAction } from 'src/redux/reducers';
import { EMethodTypes, httpClient } from '../../services/httpClient';
import { SET_PAGE_ERROR, SET_INIT_LOADING } from './types';
import getLocation from '../geolocation';
import { TPageError } from './reducer';
import { generateNumberInRange } from '../utils';
import { initSocket } from '../../socket';

type TErrorHhandler = {
	payload: {
		err: any;
		redirect?: boolean;
	};
};
export const errorHandler =
	({ payload: { err = null, redirect = false } }: TErrorHhandler): ThunkAction =>
	(dispatch): void => {
		// const isAuthenticationError = err?.response?.status === 403 || err?.response?.status === 401;
		// if (redirect || isAuthenticationError) {
		// 	window.location.replace('/');
		// 	return;
		// }
		// const inputErrors = err?.response?.data?.inputErrors;
		// const typographyErrors = err?.response?.data?.typographyErrors;
		// const toastrError = err?.response?.data?.toastr;
		// const errorMessage = err?.response?.data?.message || err?.message;
		// const pageError = err?.response?.data?.pageError;
		// if (inputErrors) {
		// 	dispatch(setInputErrors({ payload: { inputErrors } }));
		// }
		// if (typographyErrors) {
		// 	dispatch(setTypographyErrors({ payload: { typographyErrors } }));
		// }
		// if (pageError) {
		// 	dispatch(setPageError({ payload: { content: pageErrorMatrix[pageError] } }));
		// }
		// const alertMessage = isAuthenticationError
		// 	? 'Invalid credentials'
		// 	: inputErrors && !err?.response?.data?.message
		// 	? 'Please provide valid values for all fields'
		// 	: errorMessage || 'An error occurred';
		// if (toastrError) {
		// 	toastr.error(toastrError.title, toastrError.message || alertMessage);
		// } else {
		// 	toastr.error('Error', 'Something went wrong');
		// }
	};

type TSetInitLoading = {
	payload: {
		initLoading: boolean;
	};
};
export const setInitLoading =
	({ payload: { initLoading } }: TSetInitLoading): ThunkAction =>
	(dispatch): void => {
		dispatch({
			type: SET_INIT_LOADING,
			payload: initLoading,
		});
	};

type TSetPageError = {
	payload: {
		content: TPageError;
	};
};
export const setPageError =
	({ payload: { content } }: TSetPageError): ThunkAction =>
	(dispatch): void => {
		dispatch({
			type: SET_PAGE_ERROR,
			payload: content,
		});
	};

type TInit = {
	payload: {
		isMobile: boolean;
	};
};
export const init =
	({ payload: { isMobile } }: TInit): ThunkAction =>
	async (dispatch): Promise<void> => {
		try {
			dispatch(setInitLoading({ payload: { initLoading: true } }));

			const { country, state } = getLocation();

			console.log('country', country);
			console.log('state', state);

			const { user } = (await httpClient({
				url: '/api/init',
				method: EMethodTypes.POST,
			})) as {
				user: any;
			};

			let deviceId = localStorage.getItem('site-device-id');

			if (!deviceId) {
				deviceId = generateNumberInRange();

				localStorage.setItem('site-device-id', deviceId);
			}

			dispatch(initSocket({ deviceId }));
		} catch (err) {
			dispatch(errorHandler({ payload: { err } }));
		} finally {
			dispatch(setInitLoading({ payload: { initLoading: false } }));
		}
	};

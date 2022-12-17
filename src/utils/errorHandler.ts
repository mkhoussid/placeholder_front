import { AxiosError } from 'axios';
import { Toastr } from 'src/components/ui/Toastr/types';
import { serverErrorMatrix } from 'src/constants';
import { setServerError } from 'src/features/core/effector/actions';

type ExtendedAxiosError = {
	inputErrors?: string[];
	serverErrorCode?: number;
	toastr?: Toastr.Content;
};
type ErrorHhandler = {
	payload: {
		err: AxiosError<ExtendedAxiosError> | null;
		redirect?: boolean;
	};
};
const errorHandler = ({ payload: { err = null, redirect = false } }: ErrorHhandler) => {
	const { serverErrorCode, toastr, inputErrors } = err?.response?.data ?? {};

	if (serverErrorCode) {
		if (!serverErrorMatrix[serverErrorCode]) {
			console.warn(`Provided server error code \`${serverErrorCode}\` was not recognized`);
		}
		setServerError({ payload: { serverError: serverErrorMatrix[serverErrorCode] } });
	}

	if (toastr) {
	}
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

export default errorHandler;

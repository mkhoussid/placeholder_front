import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { setOnAuthRedirectPath } from 'src/features/auth/redux/actions';

export type TRedirect = {
	to: string;
	replace?: boolean;
	state?: Record<string, never | string> | undefined;
	onAuthRedirectPath?: string;
};
const Redirect = React.memo(({ to, replace = false, onAuthRedirectPath, state }: TRedirect) => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		// dispatch(setOnAuthRedirectPath({ payload: { redirectPath: onAuthRedirectPath } }));
	}, []);

	return <Navigate to={to} replace={replace} state={state} />;
});

export default Redirect;

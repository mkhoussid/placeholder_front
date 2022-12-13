import * as React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, uris } from 'src/router';
import { useLocation } from 'react-router-dom';
import { generatePath } from 'src/core/utils';
import { IState } from 'src/redux/reducers';

interface PrivateRouteProps {
	Component: React.FC;
}
const PrivateRoute: React.FC<PrivateRouteProps> = React.memo(({ Component }) => {
	const user = null; //useSelector((state: IState) => state.app.features.auth.user);

	const { pathname } = useLocation();

	if (!user) return <Redirect to={generatePath({ uri: uris.AUTH })} onAuthRedirectPath={pathname} />;

	return <Component />;
});

export default PrivateRoute;

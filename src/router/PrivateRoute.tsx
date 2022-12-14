import * as React from 'react';
import { Redirect, uris } from 'src/router';
import { useLocation } from 'react-router-dom';
import { generatePath } from 'src/utils';

interface PrivateRouteProps {
	Component: React.FC;
}
const PrivateRoute: React.FC<PrivateRouteProps> = React.memo(({ Component }) => {
	const user = null; //useSelector((state: IState) => state.app.features.auth.user);

	const { pathname } = useLocation();

	if (!user)
		return (
			<Redirect
				to={generatePath({ uri: uris.AUTH.LOGIN })}
				//onAuthRedirectPath={pathname}
			/>
		);

	return <Component />;
});

export default PrivateRoute;

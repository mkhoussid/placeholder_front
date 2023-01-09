import * as React from 'react';
import { doLogout } from '../../effector/actions';
import { Redirect, uris } from 'src/router';
import { useStore } from 'effector-react';
import { $user } from '../../effector/store';

const Logout = React.memo(() => {
	const user = useStore($user);

	React.useEffect(() => {
		doLogout();
	}, []);

	console.log('user', user);

	if (!user) {
		return <Redirect to={uris.ROOT} />;
	}

	return null;
});

export default Logout;
